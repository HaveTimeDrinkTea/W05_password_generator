// indicate that the code should be executed in "strict mode".
"use strict";

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// variables for default password generator inputs
var defaultPwdLen = 12;
var defaultOptionArray = [true, true, true, true];
var defaultPwdArray = ((numericCharacters.concat(specialCharacters)).concat(lowerCasedCharacters)).concat(upperCasedCharacters);


//variables of user inputs for generating password
let pwdLen;
let isNum = true;
let isSpec = true;
let isLower = true;
let isUpper = true;
let userOptionArray;
let userPwdArray;


// User input validation function. Called by getPasswordOptions() 
// var isUseDefault = false;

function checkUserInput() {
    pwdLen = parseInt(pwdLen);
    // checks pwdLen input for zero, nulls and non-integer number
    if (!(Number.isInteger(pwdLen)) || (pwdLen < 10) || (pwdLen > 64)) {
        console.log(pwdLen, "is a not integer or less than 10 or more than 64:", typeof pwdLen);
        pwdLen = defaultPwdLen;
        console.log("so I have to set your password legnth to", pwdLen);
    };
    // check for all false password options 
    if ((isNum === false) && (isSpec === false) && (isLower === false) && (isUpper === false)) {
        userOptionArray = defaultOptionArray;
        console.log("all false you shit stirrer!");
    } else {
        userOptionArray = [isNum, isSpec, isLower, isUpper];
        console.log("user options are:", userOptionArray);
    };
}

// Function to prompt user for password options
function getPasswordOptions() {
    pwdLen = prompt("Enter your desired password length: \n (minimum 10 and maximum 64):", 12);
    isNum = confirm("Include numbers in your pasword: \n (Click OK to include or click CANCEL to exclude.");
    isSpec = confirm("Include special characters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
    isLower = confirm("Include lower case letters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
    isUpper = confirm("Include upper case letters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
    checkUserInput();
};




// randomly sorting any array randomly using the Fisher-Yates method to ensure an even random pick of characters in getRandom(array) 

function randomSortArray(anyArray) {
    for (let i = anyArray.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = anyArray[i];
        anyArray[i] = anyArray[j];
        anyArray[j] = k;
    };
    return anyArray;
}

// function for preparing the array of all selected characters

function prepArray() { 
    userPwdArray = [null];
    for (let i = 0; i < userOptionArray.length; i++) {
        if (userOptionArray[i]) {
            switch (i) {
                case 0:
                    userPwdArray = userPwdArray.concat(numericCharacters);
                    console.log("case 0 numerics:", userPwdArray);
                    break;
                case 1: 
                    userPwdArray = userPwdArray.concat(specialCharacters);
                    console.log("case 1 spec:", userPwdArray);
                    break;  
                case 2:
                    userPwdArray = userPwdArray.concat(lowerCasedCharacters);
                    console.log("case 2 lower:", userPwdArray);
                    break;
                case 3:     
                    userPwdArray = userPwdArray.concat(upperCasedCharacters);
                    console.log("case 3 upper:", userPwdArray);
                    break;          
            }
        }
    };
    userPwdArray.shift();           // remove the first null element in array
    randomSortArray(userPwdArray);  // random sort the array again to make it even 
    console.log("The newly resorted array userPwdArray:", userPwdArray);
};   

// Function for getting a random element from an array

function getRandom(anyArray) {
    let pwdChosenChar;
    let randNum = Math.floor(((Math.random()) * anyArray.length));
    console.log("random number is:", randNum);
    pwdChosenChar = anyArray[randNum];
    console.log("chosen char:", pwdChosenChar);
    return pwdChosenChar;
}

// function to get a random password of the user specified length
var finalUserPwd;

function prepUserPwd (userPwdArray, pwdLen) {
    finalUserPwd = getRandom(userPwdArray);
    for (let i = 1; i < pwdLen; i++) {
        finalUserPwd = finalUserPwd + getRandom(userPwdArray);
        console.log(i, ":", finalUserPwd);
    };
}


function generatePassword() {
    // Ask for user inputs and validate them
    getPasswordOptions();
    // Prepare the characters array
    prepArray(); 
    prepUserPwd(userPwdArray, pwdLen);
    return finalUserPwd;
}

function generatePasswordOnLoad() {
    pwdLen = defaultPwdLen;
    userOptionArray = [true,true, true, true];
    userPwdArray = defaultPwdArray;
    prepUserPwd(userPwdArray, pwdLen);
    var passwordText = document.querySelector('#password');
    passwordText.value = finalUserPwd;
}





// ==========================================================
// DO NOT TOUCH ANY OF THE FOLLOWING CODE
// ==========================================================
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    inputOptions();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
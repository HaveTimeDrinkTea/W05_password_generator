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

var pwdLen = "12";
var isNum = true;
var isSpec = true;
var isLower = true;
var isUpper = true;
var userOptionArray;

// Function to prompt user for password options
function getPasswordOptions() {
  pwdLen = prompt("Enter your desired password length: \n (minimum 10 and maximum 64):", "12");
  isNum = confirm("Include numbers in your pasword: \n (Click OK to include or click CANCEL to exclude.");
  isSpec = confirm("Include special characters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
  isLower = confirm("Include lower case letters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
  isUpper = confirm("Include upper case letters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
};

getPasswordOptions();
userOptionArray = [isNum, isSpec, isLower, isUpper];
console.log(userOptionArray);

var userPwdArray;
var defaultPwdArray = ((numericCharacters.concat(specialCharacters)).concat(lowerCasedCharacters)).concat(upperCasedCharacters);

// function for preparing an array of selected characters
function prepArray() { 
    for (let i = 0; i < userOptionArray.length; i++) {
        if (userOptionArray[i]) {
            switch (i) {
                case 0:
                    userPwdArray = numericCharacters.concat(userPwdArray);
                    console.log("0:", userPwdArray);
                    break;
                case 1: 
                    userPwdArray = specialCharacters.concat(userPwdArray);
                    console.log("1:", userPwdArray);
                    break;  
                case 2:
                    userPwdArray = lowerCasedCharacters.concat(userPwdArray);
                    console.log("2:", userPwdArray);
                    break;
                case 3:     
                    userPwdArray = upperCasedCharacters.concat(userPwdArray);
                    console.log("3:", userPwdArray);
                    break;          
            }
        }
    }
};   

prepArray();
console.log("before pop");
console.log(userPwdArray);

userPwdArray.pop();
console.log("after pop");
console.log(userPwdArray);




// function for randomly sorting an array of selected characters using the The Fisher Yates Method
// the for loop in this function is taken from w3schools.com



function randomSortArray(anyArray) {
  for (let i = anyArray.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = anyArray[i];
    anyArray[i] = anyArray[j];
    anyArray[j] = k;
  }
}



console.log("before sort");
console.log(userPwdArray);

randomSortArray(userPwdArray);

console.log("after sort");
console.log(userPwdArray);

// Function for getting a random element from an array
function getRandom(arr) {


}

// Function to generate password with user input
function generatePassword() {


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
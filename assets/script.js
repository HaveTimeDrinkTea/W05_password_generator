// indicate that the code should be executed in "strict mode".
"use strict";

// Array of special characters that can be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters that can be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters that can be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters that can be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var defaultPwdArray = ((numericCharacters.concat(specialCharacters)).concat(lowerCasedCharacters)).concat(upperCasedCharacters);

var pwdLen = "12";
var isNum = true;
var isSpec = true;
var isLower = true;
var isUpper = true;

var defaultUserOptionArray = [isNum, isSpec, isLower, isUpper];

// Function to prompt user for password options
function getPasswordOptions() {
  pwdLen = prompt("Enter your desired password length: \n (minimum 10 and maximum 64):", "12");
  isNum = confirm("Include numbers in your pasword: \n (Click OK to include or click CANCEL to exclude.");
  isSpec = confirm("Include special characters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
  isLower = confirm("Include lower case letters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
  isUpper = confirm("Include upper case letters in your pasword: \n (Click OK to include or click CANCEL to exclude.)");
  userOptionArray = [isNum, isSpec, isLower, isUpper];
  console.log(userOptionArray);
}


var userPwdArray = [null];

// function for preparing an array of selected characters
function prepArray() { 
  for (let i = 0; i < userOptionArray.length; i++) {
    if (userOptionArray[i]) {
        switch (i) {
            case 0:
              userPwdArray = numChar.concat(finauserPwdArraylarray);
              console.log("0:", userPwdArray);
              break;
            case 1: 
              userPwdArray = specChar.concat(userPwdArray);
              console.log("1:", userPwdArray);
              break;  
            case 2:
              userPwdArray = lowerChar.concat(userPwdArray);
              console.log("2:", userPwdArray);
              break;
            case 3:     
            userPwdArray = upperChar.concat(userPwdArray);
              console.log("3:", userPwdArray);
              break;          
        }
    }
  }
  console.log("before pop");
  console.log(userPwdArray);
  
  userPwdArray.pop();

  console.log("after pop");
  console.log(userPwdArray);
};



// function for randomly sorting an array of selected characters using the The Fisher Yates Method
// the for loop in this function is taken from w3schools.com

var pwdArray;

testArray = ["z","25","56", "X", "g","T", "%", "8", "a"];
console.log("before:", testArray);

function randomSortArray(anyArray) {
  for (let i = anyArray.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = anyArray[i];
    anyArray[i] = anyArray[j];
    anyArray[j] = k;
  }
}

randomSortArray(testArray);

console.log("after:", testArray);

// Function for getting a random element from an array
function getRandom(arr) {


}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  console.log(pwdLen);
  console.log("isNum", isNum);
  console.log("isSpec",isSpec);
  console.log("isLower", isLower);
  console.log("isUpper", isUpper);
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
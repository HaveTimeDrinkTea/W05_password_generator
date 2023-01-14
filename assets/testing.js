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

var userPwdArray = [null];
var defaultPwdArray = ((numericCharacters.concat(specialCharacters)).concat(lowerCasedCharacters)).concat(upperCasedCharacters);

// function for preparing an array of selected characters
function prepArray() { 
    for (let i = 0; i < userOptionArray.length; i++) {
        if (userOptionArray[i]) {
            switch (i) {
                case 0:
                    userPwdArray = userPwdArray.concat(numericCharacters);
                    console.log("0:", userPwdArray);
                    break;
                case 1: 
                    userPwdArray = userPwdArray.concat(specialCharacters);
                    console.log("1:", userPwdArray);
                    break;  
                case 2:
                    userPwdArray = userPwdArray.concat(lowerCasedCharacters);
                    console.log("2:", userPwdArray);
                    break;
                case 3:     
                    userPwdArray = userPwdArray.concat(upperCasedCharacters);
                    console.log("3:", userPwdArray);
                    break;          
            }
        }
    }
};   

prepArray();
console.log("before shift");
console.log(userPwdArray);

userPwdArray.shift();
console.log("after shift");
console.log(userPwdArray);





// let isNum = true;
// let isSpec = false;
// let isLower = true;
// let isUpper = false;

// // var test = (isvar ? "1" : "0") +  (isnum ? "1" : "0") +  (isspec ? "1" : "0");

// // console.log(test);

// var userOptionArray = [isNum, isSpec, isLower, isUpper];
// console.log(userOptionArray);

// // function isGetArray (element) {
// //     element = (element ? true : null) 
// // }

// var numChar = ["1","2","3","4"];
// var specChar = ["!", "@", "£", "$"];
// var lowerChar = ["a", "b", "c", "d"];
// var upperChar =["A","B", "C", "D"];


// // var finalarray = ((numChar.concat(specChar)).concat(lowerChar)).concat(upperChar);

// // var tripledArray = originalArray.map(function(elementN) {
// //     if (elementN) {
// //         finalarray = finalarray.concat()
// //     }
// // });

// var finalarray = [null];

// for (let i = 0; i < userOptionArray.length; i++) {
//     if (userOptionArray[i]) {
//         switch (i) {
//             case 0:
//                 finalarray = numChar.concat(finalarray);
//                 console.log("0:", finalarray);
//                 break;
//             case 1: 
//                 finalarray = specChar.concat(finalarray);
//                 console.log("1:", finalarray);
//                 break;  
//             case 2:
//                 finalarray = lowerChar.concat(finalarray);
//                 console.log("2:", finalarray);
//                 break;
//             case 3:     
//                 finalarray = upperChar.concat(finalarray);
//                 console.log("3:", finalarray);
//                 break;          
//         }
//     }
// }

// console.log("before pop");
// console.log(finalarray);

// finalarray.pop();
// console.log("after pop");
// console.log(finalarray);

// // check if the array is null 
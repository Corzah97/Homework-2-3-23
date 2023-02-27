// Test the console log
console.log("Test, test, one, two, one, two, testing.")
var passwordLength = 8 || 128;
var choiceArr = [];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '<', '>', '?', '/']
var lowerCassArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w,','x', 'y', 'z'];
var upperCassArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W,','X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
return "test"
}

function getPrompts() {
  //Password Length
  passwordLength = parseInt(prompt("How many characters would you like for your password? (8 - 128 characters"));

  //error check for numbers greater then 8 and less then 128
  if (passwordLength > 8 || passwordLength < 128 || isNaN(passwordLength)) {
  alert("Password Length has to be entered as a number, 8 - 128. Try Again.");
  return false;
  } 

 //accepts and prints to console
 if (passwordLength < 8 || passwordLength > 128 || (passwordLength) === true) {
  console.log(passwordLength);
  alert("You have selected a password length of " + passwordLength + "characters.");
   
  // includelowerCassArr
  var includelowerCassArr = confirm ("Do you want to add lowercase letters in your password?")
  // includeUpperCassArr
  var includeupperCassArr = confirm ("Do you want to add Uppercase letters in your password?")
  //includenumberArr
  var includenumberArr = confirm ("Do you want to add numbers in your password?")
  //includespecialCharrArr
  var includespecialCharArr = confirm ("Do you want to add special characters in your password?")
  
 }
 return true;
}
// Test the console log
console.log("Test, test, one, two, one, two, testing.")


var passwordLength = 8 || 128;
var choiceArr = [];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '<', '>', '?', '/', ',']
var lowerCassArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w,','x', 'y', 'z'];
var upperCassArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W,','X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
 
  if (correctPrompts){
  var newpassword = generatePassword();
  passwordText.value = newpassword;
 } else {
  passwordText.value = "";
 }

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
 // 
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
      var randomGenerator = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomGenerator]; 
  }
  return password;
}

// Use this function to iniate prompts on the webpage
function getPrompts() {
   // Choice Array
   choiceArr = [];

   //Password Length
   passwordLength = parseInt(prompt("How many characters would you like for your password? (8 - 128 characters"));
 
   //error check for numbers greater then 8 and less then 128
   if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
   alert("Password Length has to be entered as a number, 8 - 128. Try Again.");
   return false;
   } 
 
   //accepts and prints to console
   
   alert("You have selected a password length of " + passwordLength + "characters.");
    
   // includelowerCassArr
   var includelowerCassArr = confirm ("Do you want to add lowercase letters in your password?");
   // includeUpperCassArr
   var includeupperCassArr = confirm ("Do you want to add Uppercase letters in your password?");
   //includenumberArr
   var includenumberArr = confirm ("Do you want to add numbers in your password?");
   //includespecialCharrArr
   var includespecialCharArr = confirm ("Do you want to add special characters in your password?");
   
 
   if (includelowerCassArr === false && includeupperCassArr === false && includenumberArr === false && includespecialCharArr === false) {
     alert("Have to choose at least one option!")
     return false;
   }

   if (includelowerCassArr === true){
    choiceArr = choiceArr.concat(lowerCassArr);
   }

   if (includeupperCassArr === true){
    choiceArr = choiceArr.concat(upperCassArr);
   }

   if (includenumberArr === true){
    choiceArr = choiceArr.concat(numberArr);
   }

   if (includespecialCharArr === true){
    choiceArr = choiceArr.concat(specialCharArr);
   }
 
   console.log (choiceArr)

   for (let i = 0; i < passwordLength; i++) {

    password += choiceArr [Math.floor(Math.random)]
   }
   
return true
}




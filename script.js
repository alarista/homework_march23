// Selects the Generate Password button
var generateBtn = document.querySelector("#generate");

// var specialChar = '';
// var passwordLength = 0;


// Takes user's values for the password
function takePasswordLength(){

  var passwordLength = window.prompt("Please provide the password length (min 8 char, max 128 char): ");
  
  while (passwordLength < 8 || passwordLength > 128){
      passwordLength = window.prompt("Please provide a number between 8 and 128: ");
  }
  
  return passwordLength;
}

function takeSpecialChar(){

  var specialChar = window.prompt("Special character to include?");

  while (specialChar.length <= 0){
    specialChar = window.prompt("Please provide a special character to include");
  }

  return specialChar;
}


// Write password to the #password input
function writePassword() {

  var passL = takePasswordLength();
  var specialC = takeSpecialChar();

  var passwordValidation = window.confirm("You chose a password with a length of " + passL + ", which includes the special character '" + specialC + "' Do you agree?");

  while (passwordValidation === false){
    passL = takePasswordLength();
    specialC = takeSpecialChar();
    passwordValidation = window.confirm("You chose a password with a length of " + passL + ", which includes the special character '" + specialC + "' Do you agree?");
  }

  var password = Math.random();
  console.log(password);
  password = password.toString(36);
  password = specialC + password;
  password = password.slice(0,passL);


  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  // 14 is the longest value it can print
  console.log(password.length);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


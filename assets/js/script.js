// Define character code ranges for various character types
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
);

// Function to capture user preferences for password generation
function getUserPreferences() {
  const characterAmount = parseInt(prompt("Enter the length for the password (between 8 and 128):"));
  const includeLowercase = confirm("Do you want to include lowercase characters? Press OK for Yes and Cancel for No.");
  const includeUppercase = confirm("Do you want to include uppercase characters? Press OK for Yes and Cancel for No.");
  const includeNumbers = confirm("Do you want to include numbers? Press OK for Yes and Cancel for No.");
  const includeSymbols = confirm("Do you want to include special characters? Press OK for Yes and Cancel for No.");

// Return user preferences as an object
  return {
    characterAmount,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  };
}

// Function to generate a password based on user preferences
function generatePasswordFromPreferences() {
  const { characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols } = getUserPreferences();
  return generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
}

// Core function to generate the password
function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = [];
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  
// Generate password characters
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
}

// Utility function to generate an array of numbers from low to high
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// Button click to generate and display password
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePasswordFromPreferences();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.size = password.length;
}

generateBtn.addEventListener("click", writePassword);

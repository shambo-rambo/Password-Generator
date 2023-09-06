# Password-Generator

This password generator provides a simple way to generate secure passwords based on user preferences. Users can specify the length of the password and choose to include lowercase characters, uppercase characters, numbers, and/or special characters.

Features
Dynamic password length: Choose a password length between 8 and 128 characters.
Customizable character sets: Include or exclude:
Lowercase characters
Uppercase characters
Numbers
Special characters
Intuitive UI: Simple prompts guide the user to specify their password preferences.
Immediate password generation: The generated password is displayed instantly upon request.
How It Works
The user is prompted to specify the desired password length.
The user is asked whether they want to include:
Lowercase characters
Uppercase characters
Numbers
Special characters
The password generator takes the user's preferences into account and generates a secure, random password.
The password is displayed to the user.
Code Overview
The code is organized into several utility functions and core logic:

Utility Functions:

arrayFromLowToHigh(low, high): Generates an array of numbers from a specified range.
User Preference Collection:

getUserPreferences(): Captures and returns user preferences for password generation.
Password Generation:

generatePasswordFromPreferences(): Generates a password based on user preferences.
generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols): Core function to produce the password.
UI Interaction:

writePassword(): Writes the generated password to the associated input field in the UI.
An event listener is added to the "Generate" button to trigger password generation and display.
Usage
Open the associated HTML file in a web browser.
Click the "Generate" button.
Follow the prompts to specify your password preferences.
View the generated password.

# Screenshots

![Screenshot of my application](https://raw.githubusercontent.com/shambo-rambo/Password-Generator/main/assets/images/Generated%20Password%20screenshot.png)

![Screenshot of my application prompt feature](https://raw.githubusercontent.com/shambo-rambo/Password-Generator/main/assets/images/Prompt%20Feature%20screenshot.png)



//Grab references to each html element we need
const passwordDiv = document.querySelector('.generated-pwd-div');
const passwordLenSlider = document.querySelector('.slider');
const passwordLenDisplay = document.querySelector('.pwd-len-display');
const specialCharsElem = document.querySelector('.specialCharsOption');
const numbersElem = document.querySelector('.numbersOption');
const generatePwdBtn = document.querySelector('.generate-pwd-btn');

let generatedPwd = "";

//Set up arrays for characters, special characters, and numbers
const NUMBERS = '0123456789';
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const SPECIAL = '!@#$%^&*()+=';
let allChars = "";

//Update span next to the slider to display
//the slider value, when the slider is moved
passwordLenSlider.addEventListener('input', () => passwordLenDisplay.textContent = passwordLenSlider.value);


//When the Generate button is clicked,
//run the generatePassword() function
generatePwdBtn.addEventListener('click', () => generatePassword());


//Function to generate password
const generatePassword = () => {
    //Clear previous password and text
    generatedPwd = "";
    passwordDiv.textContent="";

    let pwdLen = passwordLenSlider.value;

    //Create one string containing all possible characters
    //looking if special charas or numbers are checked
    allChars = ALPHA
                .concat((specialCharsElem.checked ? SPECIAL : ""))
                .concat((numbersElem.checked ? NUMBERS : ""));

    //split the string of all chars into an array for easy random usage
    let charArray = allChars.split("");

    //For loop, getting a random char from the array
    //and appending it after the previous character
    for (let i=0; i < pwdLen; i++) {
        let rand = Math.floor(Math.random() * charArray.length);
        generatedPwd = `${generatedPwd}${charArray[rand]}`;

    }

    //finally display the password
    passwordDiv.textContent=generatedPwd;
}
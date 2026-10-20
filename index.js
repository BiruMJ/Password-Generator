const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];    //91 characters

const generateBtn = document.querySelector(".password-btn");
const password_1 = document.getElementById("password-1");
const password_2 = document.getElementById("password-2");
let crossIcon = document.querySelector(".cross-icon");

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generateRandomPassword() {
    let passwordLength = document.getElementById("pass-length");
    if ( passwordLength.value ) {
        passwordLength = passwordLength.value;
    } else {
        passwordLength = 15;
    }
    let password = "";
    for( let i = 0; i < passwordLength; i++ ) {
        password += getRandomCharacter();
    }
    return password;
}

let inputField = document.querySelector(".myInput");

function generatePass() {
    inputField.value = "";
    password_1.textContent = generateRandomPassword();
    password_2.textContent = generateRandomPassword();
}

function selectPassword1() {
    inputField.value = password_1.textContent;
    crossIcon.style.display = "inline-block";
}

function selectPassword2() {
    inputField.value = password_2.textContent;
    crossIcon.style.display = "inline-block";
}

function deletePassword() {
    inputField.value = "";
    crossIcon.style.display = "none";
}






















// function generateRandomPassword() {
//     let password = "";
//     for ( let i = 0; i < passwordLength; i++ ) {
//         password += getRandomCharacter();
//     }
//     return password;
// }

// function generatePass() {
//     password_1.textContent = generateRandomPassword();
//     password_2.textContent = generateRandomPassword();
// }
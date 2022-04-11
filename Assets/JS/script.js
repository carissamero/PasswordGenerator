var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var passwordLength = prompt("How long would you like your password? 6-10 characters?");
    if(passwordLength < 8 || passwordLength > 10){

}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#button1");

    passwordText.value = password;
}

generateBtn.addEventlistener("click", writePassword);
}
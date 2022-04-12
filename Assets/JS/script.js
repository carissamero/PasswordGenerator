
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var number = "1234567890";
    var symbol = "!@#$%^&*()?";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefhijklmnopqrstuvwxyz";
    var chars = "";
   var passwordLength = prompt("How long would you like your password, 8-128")
   if(passwordLength < 8 || passwordLength > 128) {
       alert("Not Correct");
       generatePassword()
   }
   var passwordSymbol = confirm("Would you like symbols?")
   if(passwordSymbol == true) {
    chars = chars + symbol;
   }
   var passwordNumber = confirm("Would you like numbers?")
   if(passwordNumber==true) {
       chars = chars + number;
   }
   var passwordUppercase = confirm("Would you like uppercase?")
   if(passwordUppercase==true) {
       chars = chars + uppercase;
   }
   var passwordLowercase = confirm("Would you like lowercase?")
   if(passwordLowercase==true) {
       chars = chars + lowercase;
   }
   var password = "";
   for(var i = 0; i < passwordLength; i++){
       var randomChar = chars[Math.floor(Math.random() * chars.length)]
       password = password + randomChar;
   }   
   return password;
}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
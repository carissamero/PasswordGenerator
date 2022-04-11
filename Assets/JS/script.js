function genPassword() {
    var generateBTN = "#button1";
    var copyBTN = "#button2"
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?";
    var passwordLength = 8;
    var password = "";
for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}
    document.getElementById("button1").value = password;
}
function copyPassword() {
    var copyText - document.getElementById("button1");
    copyText.select();
    document.queryCommandIndeterm("button2");
}
generateBTN.addEventlistener ("click", writePassword);
}
var generateBtn = document.querySelector("#Generate");

generateBtn.addEventListener("click", function genPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?";
    var passwordLength = 8;
    var password = "";

    for (var i = 0; i <= passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);}{
            return password;
    
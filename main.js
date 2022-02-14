let passEl = document.getElementById("pass-el")
let messageEl = document.getElementById("message-el")

function generatePassword() {
    let length = 10
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789([{!@#$%^&*",
    passsword = "";
    for (let i = 0, n = charset.length; i < length; i++) {
        passsword += charset.charAt(Math.floor(Math.random() * n));
    }
    messageEl.textContent = "Here is your new Password"
    passEl.textContent = passsword

}



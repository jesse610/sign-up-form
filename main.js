const passwordField = document.querySelector('#pword')
const confirmPasswordField = document.querySelector('#pword_confirm')
const createAccountBtn = document.querySelector('#create-account-btn')

function checkMatchingPasswords() {
    let pass = '';
    let confirmedPass = ''


    passwordField.oninput = (event) => {
        pass = passwordField.value
    }

    confirmPasswordField.oninput = (event) => {
        confirmedPass = confirmPasswordField.value

        if (pass === confirmedPass) {
            confirmPasswordField.setAttribute('style', 'border: 2px solid green')
        } else {
            confirmPasswordField.setAttribute('style', 'border: 2px solid red')
        }
    }
}

checkMatchingPasswords()
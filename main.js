const passwordField = document.querySelector('#pword')
const confirmPasswordField = document.querySelector('#pword_confirm')
const createAccountBtn = document.querySelector('#create-account-btn')
const confirmErrorSpan = document.querySelector('#confirm-error')
const form = document.querySelector('form')

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
            confirmErrorSpan.textContent = ""
        } else {
            confirmPasswordField.setAttribute('style', 'border: 2px solid red')
            confirmErrorSpan.textContent = "Please match password"
        }
    }
}

checkMatchingPasswords()

form.addEventListener('submit', (event) => {
    if (passwordField.value != confirmPasswordField.value && passwordField.value != '') {
        event.preventDefault()
        confirmPasswordField.classList.add('error')
        setTimeout(() => {
            confirmPasswordField.classList.remove('error')}, "500")
        }
    })
const passwordField = document.querySelector('#pword')
const confirmPasswordField = document.querySelector('#pword_confirm')
const createAccountBtn = document.querySelector('#create-account-btn')
const confirmErrorSpan = document.querySelector('#confirm-error')

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

createAccountBtn.addEventListener('click', (event) => {
    if (passwordField.value != confirmPasswordField.value && passwordField.value != '') {
        event.preventDefault()
        confirmErrorSpan.textContent = "Please match password"
        setTimeout(() => { 
            confirmErrorSpan.textContent = "" }, "4000")
    }
})
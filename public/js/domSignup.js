const signup_btn = document.querySelector('.signup_btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password')
const message = document.querySelector('.message');
const firstNameInput = document.getElementById('first_Name');
const lastNameInput = document.getElementById('last_Name');
signup_btn.addEventListener('click', event => {
    event.preventDefault();
    const requestInfoSignup = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
 fetch('/signup', {
    method: 'POST',
    body: JSON.stringify(requestInfoSignup),
    headers: {
        'content-type': 'application/json'
    }
})
// .then(() => {
//     window.location.href = "/login"
// })
.then(() => {
    message.textContent="signup succefully, so you can go into login"
})
});
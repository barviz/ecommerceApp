const submit = document.getElementById('login');
const loginError = document.querySelector('.login-message-error');

submit.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if(email.value == "admin@admin.com"){
        if(password.value == "admin"){
            window.location.href = './dashboard-admin.html'
        } else {
            loginError.classList.add('invalid-login')
        }
    } else {
        loginError.classList.add('invalid-login')
    }
})
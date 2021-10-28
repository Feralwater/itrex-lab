export const parseRequestURL = () => {
    const url = location.hash.slice(1).toLowerCase() || '/';
    const urlParts = url.split("/")
    return {
        resource: urlParts[1] || null,
        id: urlParts[2] || null,
        verb: urlParts[3] || null,
    }
}

export const onNavigate = (pathname) => {
    window.location.replace(window.location.origin + "#" + pathname);
}

function validateEmail() {
    const email = document.getElementById('email');
    const errorMessage = document.getElementById('email-error');
    const re = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    if (!re.test(email.value)) {
        email.classList.add('input-error');
        errorMessage.classList.add('input-error__message')
    }
}

export const addEmailValidateHandler = () => {

    const email = document.getElementById('email');

    email.onblur = validateEmail
    email.onfocus = function () {
        const errorMessage = document.getElementById('email-error');
        if (this.classList.contains('input-error')) {
            email.classList.remove('input-error');
            errorMessage.classList.remove('input-error__message')
        }
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const passwordMessage = document.getElementById('password-error');
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/
    if (!re.test(password.value)) {
        password.classList.add('input-error');
        passwordMessage.classList.add('input-error__message')
    }
}

export const addPasswordValidateHandler = () => {

    const password = document.getElementById('password');
    password.onblur = validatePassword

    password.onfocus = function () {
        const passwordMessage = document.getElementById('password-error');
        if (this.classList.contains('input-error')) {
            password.classList.remove('input-error');
            passwordMessage.classList.remove('input-error__message')
        }
    }
}
// function validateName() {
//     const name = document.getElementById('password');
//     const nameMessage = document.getElementById('password-error');
//     const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/
//     if (!re.test(password.value)) {
//         password.classList.add('input-error');
//         passwordMessage.classList.add('input-error__message')
//     }
// }

// export const addPasswordValidateHandler = () => {
//
//     const password = document.getElementById('password');
//     password.onblur = validatePassword
//
//     password.onfocus = function () {
//         const passwordMessage = document.getElementById('password-error');
//         if (this.classList.contains('input-error')) {
//             password.classList.remove('input-error');
//             passwordMessage.classList.remove('input-error__message')
//         }
//     }
// }
export const formValidate = () => {

    const form = document.getElementById('form');
    const inputWrappers = form.getElementsByClassName('form-box__input')

    Array.from(inputWrappers).forEach(el => {
        const span = el.getElementsByTagName('span')[0];
        const input = el.getElementsByTagName('input')[0];
        const type = input.dataset.type
        switch (type) {
            case 'email':
                validateEmail();
                break;
            case 'password':
                validatePassword()
                break;
        }

    })

}
export const visibilityPassword = () => {
    const passwordInputContainers = document.getElementsByClassName('passwordInputContainer');
    Array.from(passwordInputContainers).forEach(el => {
        const visibilityBtn = el.getElementsByClassName('form-box__input_password_icon')[0];
        const passwordInput = el.querySelectorAll('input[data-type="password"]')[0]

        visibilityBtn.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                visibilityBtn.classList.remove('form-box__input_password_icon-non-visible');
                visibilityBtn.classList.add('form-box__input_password_icon-visible');

            } else {
                passwordInput.type = 'password';
                visibilityBtn.classList.remove('form-box__input_password_icon-non-visible');
                visibilityBtn.classList.remove('form-box__input_password_icon-visible');
                visibilityBtn.classList.add('form-box__input_password_icon-non-visible');
            }
        })
    })
}
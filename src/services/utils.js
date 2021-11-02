import {regexForEmailValidate, regexForNameValidate, regexForPasswordValidate} from "../const/share-regex.js";

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
    window.location.replace(window.location.origin + window.location.pathname + "#" + pathname);
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

function validateInput(el, regex, errorMessage) {
    el.onblur = function () {
        if (!regex.test(el.value)) {
            el.classList.add('input-error');
            errorMessage.classList.add('input-error__message')
        }
    }
    el.onfocus = function () {
        if (el.classList.contains('input-error')) {
            el.classList.remove('input-error');
            errorMessage.classList.remove('input-error__message')
        }
    }
}

export const validateForm = () => {

    const input = [...document.getElementsByTagName('input')];

    input.forEach(el => {
        if (el.dataset.type === "name") {
            const errorMessage = el.nextSibling.nextSibling;
            validateInput(el, regexForNameValidate, errorMessage);
        }

        if (el.dataset.type === "email") {
            const errorMessage = document.getElementById('email-error');
            validateInput(el, regexForEmailValidate, errorMessage);
        }

        if (el.dataset.type === "password") {
            const errorMessage = document.getElementById('password-error');
            validateInput(el, regexForPasswordValidate, errorMessage);
        }

        if (el.dataset.confirm === "confirmPassword") {
            const errorMessage = document.getElementById('passwordConfirm-error');
            const password = document.getElementById('password')

            el.onblur = function () {
                if (el.value !== password.value) {
                    el.classList.add('input-error');
                    errorMessage.classList.add('input-error__message')
                }
            }
            el.onfocus = function () {
                if (el.classList.contains('input-error')) {
                    el.classList.remove('input-error');
                    errorMessage.classList.remove('input-error__message')
                }
            }
        }
    })
}
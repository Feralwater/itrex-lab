import {
    validateForm,
    visibilityPassword
} from "../../services/Utils.js";

const SignUp = {
    render: async () => {
        return `
            <div class="form-container">
    <form action="/" class="form-box" method="post" id="form" novalidate>
        <h2 class="form-box__title">Sign up</h2>
        <div class="form-box__input form-box__input_first-name">
            <input data-type="name" type="text" placeholder="First Name" id="">
            <span class="input-error__message_non" >First name contain unsupported characters</span>
        </div>
        <div class="form-box__input form-box__input_last-name">
            <input data-type="name" type="text" placeholder="Last Name" id="">
            <span class="input-error__message_non" >Last name contain unsupported characters</span>
        </div>
        <div class="form-box__input form-box__input_email">
            <input data-type="email" type="email" placeholder="Email" id="email">
            <span class="input-error__message_non" id="email-error">Email contain unsupported characters</span>
        </div>
        <div class="form-box__input form-box__input_password passwordInputContainer">
            <input data-password="password" data-type="password" type="password" placeholder="Password" id="password">
            <i class="form-box__input_password_icon form-box__input_password_icon-non-visible"></i>
              <span class="input-error__message_non" id="password-error">Password must be at least 6 characters long</span>
        </div>
        <div class="form-box__input form-box__input_confirm-password passwordInputContainer">
            <input data-confirm="confirmPassword" data-type="password" type="password" placeholder="Confirm Password" id="confirm-password">
            <i class="form-box__input_password_icon form-box__input_password_icon-non-visible"></i>
            <span class="input-error__message_non" id="passwordConfirm-error">Passwords do not match</span>
        </div>
        <div class="form-box__button">
            <input type="submit" value="Sign up">
            <span class="form-box__right-arrow"></span>
        </div>
    </form>
    <div class="sign-in-up__message">
        Already have an account?
        <a href="#/sign-in" class="sign-in-up__link">Sign in</a>
    </div>
</div>
        `
    },
    afterRender: async () => {
        const form = document.getElementById('form');
        const input = [...document.getElementsByTagName('input')];
        form.addEventListener('submit', e => {
            e.preventDefault();
            input.forEach(el => el.onblur && el.onblur())
        })

        visibilityPassword();
        validateForm();

    }

}

export default SignUp;
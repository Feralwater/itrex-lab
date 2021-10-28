import Layout from '../layouts/authorization.js'
import {
    addEmailValidateHandler,
    addPasswordValidateHandler,
    formValidate,
    visibilityPassword
} from "../../services/Utils.js";

const SignUp = {
    layout: Layout,
    render: async (props) => {
        const content = `
            <div class="form-container">
    <form action="/" class="form-box" method="post" id="form">
        <h2 class="form-box__title">Sign up</h2>
        <div class="form-box__input form-box__input_first-name">
            <input type="text" required placeholder="First Name" id="name">
            <span class="input-error__message" style="display: none">First name contain unsupported characters</span>
        </div>
        <div class="form-box__input form-box__input_last-name">
            <input type="text" required placeholder="Last Name" id="name">
            <span class="input-error__message" style="display: none">Last name contain unsupported characters</span>
        </div>
        <div class="form-box__input form-box__input_email">
            <input type="email" required placeholder="Email" id="email">
            <span class="input-error__message" style="display: none">Email contain unsupported characters</span>
        </div>
        <div class="form-box__input form-box__input_password passwordInputContainer">
            <input data-type="password" type="password" required placeholder="Password" id="password">
            <i class="form-box__input_password_icon form-box__input_password_icon-non-visible"></i>
            <span class="input-error__message" style="display: none">Password contain unsupported characters</span>
        </div>
        <div class="form-box__input form-box__input_confirm-password passwordInputContainer">
            <input data-type="password" type="password" required placeholder="Confirm Password" id="confirm-password">
            <i class="form-box__input_password_icon form-box__input_password_icon-non-visible"></i>
            <span class="input-error__message" style="display: none">Password contain unsupported characters</span>
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
        return await Layout.render(content)
    },
    after_render: async () => {
        const form = document.getElementById('form');
        form.addEventListener('submit', e => {
            e.preventDefault();
            formValidate();
        })
        addEmailValidateHandler();
        addPasswordValidateHandler();
        visibilityPassword();
    }

}

export default SignUp;
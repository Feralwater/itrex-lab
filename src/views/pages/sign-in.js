import Layout from '../layouts/authorization.js'
import {
    validateForm,
    visibilityPassword
} from "../../services/Utils.js";

const SignIn = {
    layout: Layout,
    render: async (props) => {
        const content = `
            <div class="form-container">
                <form action="/" class="form-box" method="post" id="form" novalidate>
                    <h2 class="form-box__title">Sign in</h2>
                    <div class="form-box__input form-box__input_email">
                        <input data-type="email" type="email" placeholder="Email" id="email">
                        <span class="input-error__message_non" id="email-error">Email contain unsupported characters</span>
                    </div>
                    <div class="form-box__input form-box__input_password passwordInputContainer">
                        <input data-type="password" type="password" placeholder="Password" id="password" >
                        <i class="form-box__input_password_icon form-box__input_password_icon-non-visible"></i>
                        <span class="input-error__message_non" id="password-error">Password contain unsupported characters</span>
                    </div>
                    <div class="form-box__button">
                        <input type="submit" value="Sign in">
                        <span class="form-box__right-arrow"></span>
                    </div>
                    <a href="#/restore-password" class="forgot__link">Forgot Password?</a>
                </form>
                <div class="sign-in-up__message">
                    Don\`t have an account?
                    <a href="#/sign-up" class="sign-in-up__link">Sign up</a>
                </div>
            </div>
        `
        return await Layout.render(content)
    },
    after_render: async () => {
        const form = document.getElementById('form');
        const input = [...document.getElementsByTagName('input')];
        form.addEventListener('submit', e => {
            e.preventDefault();
            input.forEach(el => el.onblur())
        })
        visibilityPassword();
        validateForm();
    }

}

export default SignIn;
import {onNavigate, validateForm, visibilityPassword} from "../../services/utils.js";

const RestorePassword = {
    render: () => {
       return `
               <div class="form-container">
        <form action="/" class="form-box" method="post" id="form" novalidate>
            <a href="#/sign-in" class="form-box__title">
                <span class="form-box__left-arrow"></span>
                Restore Password
            </a>
            <div class="form-box__restore-message">
                Please use your email address, and we’ll send
                you the link to reset your password
            </div>
             <div class="form-box__input form-box__input_email">
                 <input name="email" data-type="email" type="email" placeholder="Email" id="email">
                 <span class="input-error__message_non" id="email-error">Email contain unsupported characters</span>
             </div>
            <div class="form-box__button">
                <input type="submit" value="Send Reset Link">
                <span class="form-box__right-arrow"></span>
            </div>
        </form>
    </div>
        `
    },
    afterRender: () => {
        const form = document.getElementById('form');
        const input = [...document.getElementsByName('email')];

        form.addEventListener('submit', e => {
            e.preventDefault();
            input.forEach(el => el.onblur());
            if (!input[0].classList.contains('input-error')) {
                onNavigate('/send-email');
            }
        })

        visibilityPassword();
        validateForm();
    }

}

export default RestorePassword;
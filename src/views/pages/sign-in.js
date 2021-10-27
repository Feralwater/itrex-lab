import Layout from '../layouts/authorization.js'

const SignIn = {
    layout: Layout,
    render: async (props) => {
        const content = `
            <div class="form-container">
                <form action="/" class="form-box" method="post">
                    <h2 class="form-box__title">Sign in</h2>
                    <div class="form-box__input form-box__input_email">
                        <input type="email" required placeholder="Email">
                        <span class="input-error__message" style="display: none">Email contain unsupported characters</span>
                    </div>
                    <div class="form-box__input form-box__input_password">
                        <input class="input-error" type="password" required placeholder="Password">
                        <span class="input-error__message">Password contain unsupported characters</span>
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
    }

}

export default SignIn;
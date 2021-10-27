import Layout from '../layouts/authorization.js'

const RestorePassword = {
    layout: Layout,
    render: async (props) => {
        const content = `
               <div class="form-container">
        <form action="/" class="form-box" method="post">
            <a href="#/sign-in" class="form-box__title">
                <span class="form-box__left-arrow"></span>
                Restore Password
            </a>
            <div class="form-box__restore-message">
                Please use your email address, and we’ll send
                you the link to reset your password
            </div>
            <div class="form-box__input form-box__input_email">
                <input type="email" required placeholder="Email">
            </div>
            <div class="form-box__button">
                <input type="submit" value="Send Reset Link">
                <span class="form-box__right-arrow"></span>
            </div>
        </form>
    </div>
        `
        return await Layout.render(content)
    },
    after_render: async () => {
    }

}

export default RestorePassword;
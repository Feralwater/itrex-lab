const SendEmail = {
    render: () => {
        return `
                   <div class="form-container">
        <form action="/" class="form-box" method="post">
            <a href="#/restore-password" class="form-box__title">
                <span class="form-box__left-arrow"></span>
                Restore Password
            </a>
            <div class="form-box__restore-message">
                An email has been sent to <a href="#" class="email__link">example@exam.com</a>.
                Check your inbox, and click the reset link provided.
            </div>
        </form>
    </div>
        `
    },
    afterRender: () => {
    }

}

export default SendEmail;
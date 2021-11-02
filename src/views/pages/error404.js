const Error404 = {

    render: () => {
        return `
            <section class="error">
                <div class="error__number">404 Error</div>
                <div class="error__message">oops, the page you are looking for can\`t be found!😭</div>
            </section>
        `
    }
    , afterRender: () => {
    }
}
export default Error404;
const Authorization = {
    render: async (main) => {
        return `
         <main class="body-auth">${main}</main>
        `
    },
    after_render: async () => {
    }

}

export default Authorization;
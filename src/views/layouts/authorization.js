const Authorization = {
    render: async ({main}) => {
        return `
         <main>${main}</main>
        `
    },
    after_render: async () => {
    }

}

export default Authorization;
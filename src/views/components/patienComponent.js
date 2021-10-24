const patientComponent = {
    render: async ({firstName}) => {
        return `
            <div>${firstName}</div>
        `
    },
    after_render: async () => {
    }

}

export default patientComponent;
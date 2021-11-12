export const dictionary: DictionaryType = {
    doctorViewEmptyState: {
        medicalHistoryTextPart1: 'You have no patients yet.',
        medicalHistoryTextPart2: 'To create a patient profile, please contact your administrator.'
    },
    error404: {
        errorNumber: "404 Error",
        errorMessage: "oops, the page you are looking for can`t be found!😭"
    },
    messageTemplate: {
        messageTitleSuccess: "Success message goes here",
        messageTitleError: "Error message goes here",
        errorMessageText: "We show this message if something irreparable has happened. But there is nothing irreparable",
        successMessageText: "We show this message if something awesome has happened. You are awesome too",
    },
}
type DictionaryType = {
    doctorViewEmptyState: {
        medicalHistoryTextPart1: string
        medicalHistoryTextPart2: string
    },
    error404: {
        errorNumber: string
        errorMessage: string
    },
    messageTemplate: {
        messageTitleSuccess: string
        messageTitleError: string
        errorMessageText: string
        successMessageText: string
    },
}


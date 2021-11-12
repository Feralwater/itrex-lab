export const statuses = {
    confirmed: 'confirmed',
    canceled: 'canceled',
    waiting: 'waiting',
}

export const api = {
    getPatientsList() {
        // return  []
        return [
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.confirmed,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels" +
                    "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels" +
                    "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels" +
                    "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.canceled,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.waiting,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.canceled,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.confirmed,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.canceled,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.confirmed,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.waiting,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.waiting,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.confirmed,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.confirmed,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
            {
                avatar: "/img/patient-avatar.png",
                firstName: "Jane",
                lastName: "Cooper",
                status: statuses.waiting,
                time: "Thu Sept 10, 2021 4 pm – 5 pm",
                description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
                role: "patient",
            },
        ]
    }
}

export function getPatients() {
    return api.getPatientsList()
}
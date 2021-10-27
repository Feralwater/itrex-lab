export function getMe() {
    // return undefined
    return {
        avatar: "img/doctor-avatar.png",
        firstName: "Miranda",
        secondName: "Nelson",
        role: "doctor"
    }
}

export const statuses = {
    confirmed: 'confirmed',
    canceled: 'canceled',
    waiting: 'waiting',
}


/** @return {{avatar: string, firstName: string, lastName: string, time: string, description: string, status: 'confirmed'|'canceled|waiting'}[]} */
export function getPatients() {
    // return  []
    return [
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels" +
                "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels" +
                "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels" +
                "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.canceled,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.waiting,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.canceled,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.canceled,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.waiting,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.waiting,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
        {
            avatar: "img/patient-avatar.png",
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.waiting,
            time: "Thu Sept 10, 2021 4 pm – 5 pm",
            description: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
        },
    ]
}
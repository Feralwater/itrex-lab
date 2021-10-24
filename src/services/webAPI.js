export function getMe() {
    return {
        avatar: "../img/doctor-avatar.png",
        firstName: "Miranda",
        secondName: "Nelson",
        role: "doctor"
    }
}

const statuses = {
    confirmed: 'confirmed',
    canceled: 'canceled',
    waiting: 'waiting',
}

/** @return {{firstName: string, lastName: string, time: string, description: string, status: 'confirmed'|'canceled|waiting'}[]} */
export function getPatients() {
    // return  []
    return [
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        }, {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
        {
            firstName: "Jane",
            lastName: "Cooper",
            status: statuses.confirmed,
            description: "lorem",
            time: "lorem"
        },
    ]
}
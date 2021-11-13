export const users: Array<DoctorType> = [
    {
        id: "2",
        avatar: "img/doctor-avatar.png",
        firstName: "Miranda",
        secondName: "Nelson",
        role: "doctor",
        occupation: "therapist"
    },
    {
        id: "1",
        avatar: "img/user-avatar.png",
        firstName: "Larry",
        secondName: "Prinston",
        role: "patient",
        occupation: "dermatologist"
    },
    {
        id: "3",
        avatar: "img/doctor-avatar.png",
        firstName: "Lorem",
        secondName: "Ipsum",
        role: "doctor",
        occupation: "cardiologist"
    },
];

export function getMe(): DoctorType {
    return users[1]
}

type DoctorType = {
    id: string
    avatar: string
    firstName: string
    secondName: string
    role: string
    occupation: string
}

export function getDoctors(doctors: Array<DoctorType>):Array<string> {
    return doctors.map((d) => d.firstName + " " + d.secondName)
}

export function getOccupations(doctors: Array<DoctorType>):Array<string> {
    return doctors.map((d) => d.occupation)
}

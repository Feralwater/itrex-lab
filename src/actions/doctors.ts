const users = [
    {
        id: "2",
        avatar: "img/doctor-avatar.png",
        firstName: "Miranda",
        secondName: "Nelson",
        role: "doctor"
    },
    {
        id: "1",
        avatar: "img/user-avatar.png",
        firstName: "Larry",
        secondName: "Prinston",
        role: "patient",
    }
];

export function getMe() {
    // return undefined
    return users[1]
}

// export function getdoctors() {
//     // return undefined
//     return users
// }
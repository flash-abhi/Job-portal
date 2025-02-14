
export const users=[
    {
        userId: 1,
        name: "ayush",
        email: "xyz1234@gmail.com",
        phone: 9817837484,
        resume: "images/resume1.jpg"
    },
    {
        userId: 2,
        name: "abhishek",
        email: "abc2345@gmail.com",
        phone: 8818837485,
        resume: "images/resume1.jpg"
    }
]

export const addUser=(Uname,Uemail,Uphone,Uresume)=>{
    users.push({
        userId: users.length+1,
        name: Uname,
        email:Uemail,
        phone: Uphone,
        resume:Uresume
    })
}


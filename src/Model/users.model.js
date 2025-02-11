
export const users=[
    {
        userId: 1,
        name: "ayush",
        email: "xyz1234@gmail.com",
        phone: 9817837484,
        resume: "images/abc.png"
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


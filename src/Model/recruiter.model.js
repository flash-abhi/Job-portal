export default class Recruiter{
    constructor(id,name,email,password){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
    static add(name,email,password){
       const newUser = new Recruiter(users.length+1,name,email,password)
       users.push(newUser)
    }
    static check(Uemail,Upassword){
        const result = users.find(u => u.email == Uemail && u.password == Upassword)
        return result
        }
    }

let users =[]
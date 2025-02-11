import { addUser ,users} from "../Model/users.model.js"
import { sendConfirmationMail } from "../Middleware/sendMail.middleware.js"
export class UserCredentials{
    
    getUser(req,res){
       return res.render("login")
    }
    users(req,res,next){
        // console.log("job added")
        const {name,email,phone} = req.body
        // console.log(name,email,phone)
        const resume = "images/"+req.file.filename
        addUser(name,email,phone,resume)
        sendConfirmationMail(email)
        res.render("main",{userEmail:req.session.userEmail ,name:req.session.name})
    }
    usersBoard(req,res){
        res.render("users-board",{users:users,userEmail:req.session.userEmail ,name:req.session.name})
    }
    
}
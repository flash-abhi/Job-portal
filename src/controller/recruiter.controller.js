import { name } from "ejs"
import { add } from "../Model/jobs.model.js"
import Recruiter from "../Model/recruiter.model.js"
export const getRegistrationForm = (req,res)=>{
    res.render("registration")
}
export const postRegister = (req,res)=>{
    const {name,email,password} = req.body
    // console.log(req.body)
    Recruiter.add(name,email,password)
    res.render("login")
}

export const addNewJob = (req,res)=>{
    const data = req.body
    console.log(data)
    add(data)
    res.render("main",{userEmail:req.session.userEmail ,name:req.session.name})
}

export const getLoginForm = (req,res)=>{
    res.render("login")
}
export const postLogin = (req,res) =>{
   const {email,password} = req.body
//    console.log(req.body)
   const result = Recruiter.check(email,password)
    if(result){
        req.session.userEmail = email
        req.session.name = result.name
        res.render("main",{userEmail:req.session.userEmail ,name:req.session.name})
    }
    else{
        res.send('invalid user')
    }
}
export const logout=(req,res) =>{
    req.session.destroy((err)=>{
        if(err){
          console.log(err)
           return res.status(500).send("logout failed")
        }
        res.redirect('/login')
    })
    res.clearCookie('lastVisit')
}
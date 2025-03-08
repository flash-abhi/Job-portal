
import express from "express"
import path from "path"
import ejsLayouts from "express-ejs-layouts"
import {DisplayMainPage, SearchJob,updateJob,postUpdateJob,deleteJob} from "./src/controller/main.controller.js"
import {UserCredentials} from "./src/controller/user.controller.js"
import {DisplayJobs,ParticularJobDetails,ApplyForm,postNewJob} from "./src/controller/main.controller.js"
import { uploadFile } from "./src/Middleware/fileUpload.middleware.js"
import { sendConfirmationMail } from "./src/Middleware/sendMail.middleware.js"
import validateUser from "./src/Middleware/validationUser.middleware.js"
import { getRegistrationForm ,addNewJob ,getLoginForm ,postRegister,postLogin, logout} from "./src/controller/recruiter.controller.js"
import session from "express-session"
import { auth } from "./src/Middleware/auth.middleware.js"
import cookieParser from "cookie-parser"
import { setlastVisit } from "./src/Middleware/lastVisit.middleware.js"
const app = express()
app.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false}
}))
app.use(cookieParser())
// app.use(setlastVisit)
const usercredentials = new UserCredentials()
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs")
app.set("views",path.join(path.resolve(),"src","Views"))
app.use(express.static("src/Views"))
app.use(express.static(path.join(path.resolve(), "src", "public")));
app.use(ejsLayouts)
app.get('/',setlastVisit,DisplayMainPage)
app.get('/register',getRegistrationForm)
app.post('/register',postRegister)
app.get('/login',getLoginForm)
app.post('/login',postLogin)
app.get('/logout',logout)
app.post('/logout',logout)
app.get("/jobs",DisplayJobs)
app.get("/jobinfo/:id",ParticularJobDetails)
app.get("/apply",ApplyForm)
app.post("/apply",uploadFile.single("resume"),validateUser,usercredentials.users,sendConfirmationMail)
app.get('/new-job',auth,postNewJob)
app.post('/new-job',auth,addNewJob)
app.get("/update-job/:id",updateJob)
app.post("/update-job",postUpdateJob)
app.delete("/delete-job/:id",deleteJob)
app.get("/userboard",auth,usercredentials.usersBoard)
app.post("/jobs",SearchJob)




export default app;

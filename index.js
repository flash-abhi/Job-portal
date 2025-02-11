import express from "express"
import path from "path"
import ejsLayouts from "express-ejs-layouts"
import {DisplayMainPage, SearchJob} from "./src/controller/main.controller.js"
import {UserCredentials} from "./src/controller/user.controller.js"
import {DisplayJobs,ParticularJobDetails,ApplyForm,postNewJob} from "./src/controller/main.controller.js"
import { uploadFile } from "./src/Middleware/fileUpload.middleware.js"
import { sendConfirmationMail } from "./src/Middleware/sendMail.middleware.js"
import validateUser from "./src/Middleware/validationUser.middleware.js"
import { getRegistrationForm ,addNewJob ,getLoginForm ,postRegister,postLogin} from "./src/controller/recruiter.controller.js"

const app = express()

const usercredentials = new UserCredentials()
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs")
app.set("views",path.join(path.resolve(),"src","Views"))
app.use(express.static("src/Views"))
app.use(express.static("src/public"))
app.use(ejsLayouts)
app.get('/',DisplayMainPage)
app.get('/register',getRegistrationForm)
app.post('/register',postRegister)
app.get('/login',getLoginForm)
app.post('/login',postLogin)
app.get("/jobs",DisplayJobs)
app.get("/jobinfo/:id",ParticularJobDetails)
app.get("/apply",ApplyForm)
app.post("/apply",uploadFile.single("resume"),validateUser,usercredentials.users,sendConfirmationMail)
app.get('/new-job',postNewJob)
app.post('/new-job',addNewJob)
app.get("/userboard",usercredentials.usersBoard)
app.post("/jobs",SearchJob)















export default app;

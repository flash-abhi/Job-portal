import { getJobs,getJobById ,search ,update} from "../Model/jobs.model.js"
import { users } from "../Model/users.model.js"

export const DisplayMainPage = (req,res)=>{
    res.render("main",{userEmail:req.session.userEmail ,name:req.session.name})
}
export const ParticularJobDetails= (req,res)=>{
    const id = req.params.id
    const jobFound = getJobById(id)
    if(jobFound){
        res.render("Jobinfo",{jobFound:jobFound,users:users.length,userEmail:req.session.userEmail ,name:req.session.name})
    }
    else{
        res.status(401).render("error-page")
    }
}

export const postNewJob = (req,res)=>{
    res.render("new-job",{userEmail:req.session.userEmail ,name:req.session.name})
}

export const DisplayJobs = (req,res) =>{
    const jobs = getJobs()
    res.render("jobs",{jobs:jobs,userEmail:req.session.userEmail ,name:req.session.name})
}

export const ApplyForm = (req,res) =>{
    res.render("apply-form",{errorMessage:null,userEmail:req.session.userEmail ,name:req.session.name})
}

export const SearchJob= (req,res) =>{
   const {name}= req.body
   console.log(name)
   const findedJob = search(name)
   if(findedJob.length != 0){
   console.log(findedJob)
   res.render("searchResult",{findedJob: findedJob[0]})
    }
    else{
        res.render("error-page")
    }
}

export const updateJob = (req,res)=>{
    // if job exist then return view
    const {id} = req.params
    // console.log(id)
    const jobFound = getJobById(id)
    // console.log(jobFound)
    if(jobFound){
        res.render("update-job",{jobFound:jobFound})
    }
    // else return error
    else{
        res.status(401).send("Product not found")
    }
}
export const postUpdateJob = (req,res)=>{
    const data = req.body
    console.log(data);
    data.id = Number(data.id); // Convert ID to number

    console.log("Updating Job ID:", data.id);
    update(data)
    const jobs = getJobs()
    res.redirect("/jobs");
}
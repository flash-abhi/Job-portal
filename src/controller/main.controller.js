import { getJobs,getJobById ,search} from "../Model/jobs.model.js"
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
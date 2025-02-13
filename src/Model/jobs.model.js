
const date = new Date()
export const getJobs = ()=>{
    return jobs
}
export const getJobById = (id)=>{
    return jobs.find(j => j.id == id)
}
export const search=(name)=>{
     const findedJob = jobs.filter((job) => {
        if(job.name == name){
            return job
        }
    })
    return findedJob
}
export const add = (data)=>{
    jobs.push({
        id: jobs.length+1,
        name:data.company_name,
        role:data.job_designation,
        location: data.job_location,
        package: data.salary,
        Lastdate: data.apply_by,
        openings: data.openings,
        Postdate: new Date(date),
        skills: data.skills_required,
    })
}
export const update = (data) => {
    const jobId = Number(data.id); // Convert ID to number
    const index = jobs.findIndex(j => j.id === jobId);
    if (index !== -1) { // Ensure the job exists before updating
        jobs[index].name = data.company_name;
        jobs[index].role = data.job_designation;
        jobs[index].category = data.job_category;
        jobs[index].location = data.job_location;
        jobs[index].package = data.salary;
        jobs[index].openings = data.openings;
        jobs[index].Lastdate = data.apply_by;
        jobs[index].skills = data.skills_required;

        // console.log("Updated job:", jobs[index]);
    } else {
        console.log("Job not found with ID:", data.id);
    } 
};
const jobs = [
    {
    id:1,
    name:"coding ninjas",
    role:"SDE",
    location:"Gurgaon HR IND Remote",
    package:"14-20lpa",
    Lastdate: "30 Aug 2025",
    openings: 5,
    Postdate: new Date(date),
    skills:["React","NodeJs","JS","SQL","MongoDB","Express","AWS"],
    },
    {
    id:2,
    name:"go digit",
    role:"Angular Developer",
    location:"Pune IND On-Site",
    Lastdate: "3 Aug 2025",
    openings: 2,
    Postdate: new Date(date),
    package:"6-10lpa",
    skills:["Angular","JS","SQL","MongoDB","Express","AWS"],
    },
    {
    id: 3,
    name:"justpay",
    role:"SDE",
    location:"Banglore IND",
    package:"20-26lpa",
    Lastdate: "25 Aug 2025",
    openings: 7,
    Postdate: new Date(date),
    skills:["React","NodeJs","JS","SQL","MongoDB","Express","AWS"],
    },
]
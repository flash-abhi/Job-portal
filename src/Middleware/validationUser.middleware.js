const validateUser = (req,res,next)=>{
    const errors=[]
    const {name,email,phone} = req.body;
    const files = req.file ? req.file.filename : null;
    console.log(files)
    console.log(req.file)
    if(!name || name.trim() == ''){
        errors.push("Name is required")
    }
    if(!email || email<1){
        errors.push("email must be a required ")
    }
    if(!phone || phone<1){
        errors.push("phone number is required")
    }
     if(!files){
        errors.push("Resume is Required")
    }
    if(errors.length>0){
        return res.render("apply-form.ejs",{errorMessage:errors})
    } 
    next()
}

export default validateUser
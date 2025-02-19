import multer from "multer"
const storageconfig = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,"src/public/images")
    } 
    ,
    filename: (req,file,cb)=>{
        const name = Date.now()+"-"+file.originalname
        cb(null,name)
    }
})
export const uploadFile = multer({
    storage:storageconfig
})
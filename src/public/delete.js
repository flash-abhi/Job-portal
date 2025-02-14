function confirmDelete(id){
    const result = confirm("Are you sure you want to delete this job")
    if(result){
        fetch('delete-job/'+id ,{
            method:"POST"
        }).then((res)=>{
            if(res.ok){
                location.reload()
            }
        })
    }
}
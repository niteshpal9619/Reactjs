const {readfile,writefile}=require('fs')

readfile('./Content/SubFolder/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
})
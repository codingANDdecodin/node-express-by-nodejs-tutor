import http from 'http'
import fs from 'fs'

http.createServer((req,res)=>{
    if(req.url==="/upload" && req.method==='POST'){
        let body='';
        req.on("data",(chunk)=>{
            body+=chunk;
        })

        req.on("end",()=>{
                fs.appendFile("myfile.pdf",body,(err)=>{
                    if(err){
                        res.statusCode=500;
                        res.end(err)
                    }else{
                        res.statusCode=200;
                        res.end("file uploded succesfully")
                        console.log(body)

                    }
                })
        })
    }else{
        res.statusCode=404
        res.end("page not found")
    }
}).listen(3000,()=>{
    console.log("listing..........")
})

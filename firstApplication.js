var http=require("http")

http.createServer((req,res)=>{
    res.writeHead(200,{'containt-type':'application/json'});
    res.end("helllo world")
}).listen(5001,()=>{
    console.log("listin.....")
})
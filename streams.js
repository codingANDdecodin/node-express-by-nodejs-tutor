// import fs from 'fs'

// var myfile=fs.ReadStream("./myfile.txt")
// let body='';
// myfile.setEncoding('UTF-8')

// myfile.on('data',(chunk)=>{
//    body+=chunk;
// })

// myfile.on('end',()=>{
//     console.log(body)
// })

// myfile.on('error',(err)=>{
//     console.log(err)
// })

import fs from 'fs'
import http from 'http'

http.createServer((req,res)=>{
    var myfile=fs.ReadStream("./myfile.txt",'utf-8');
    let body='';
    myfile.on('data',(chunk)=>{
        body+=chunk;

    })

    myfile.on('end',()=>{
      
        var outputstraem=fs.WriteStream('output.txt');
        outputstraem.write(body,()=>{
            console.log('data has been writen on file')
        })
        res.end(body)
    })
}).listen(3000,()=>{
    console.log('listing...')
})
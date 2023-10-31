import express  from "express";
const app=express();
const midfun=(req,res,next)=>{
    req.requestTime= new Date();
    console.log("mid fun excicute")
    next()
}
// app.use(midfun);

// app.get("/",(req,res)=>{
//     res.send('got sucesss')
// })
// app.listen(3000,()=>{
//     console.log('listing.....')
// })

import {middle} from "./midfun.js";
app.use(middle(),midfun);
app.get("/",(req,res)=>{
    res.send('got sucesss yes and date is : '+req.requestTime)
})
app.listen(3000,()=>{
    console.log('......')
})
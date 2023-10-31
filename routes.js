import express from 'express'
const app=express();

app.get("/",(req,res)=>{
    res.send("this is get request and home route")
})

app.post("/",(req,res)=>{
    res.send(`this is post request and home path and msg is : $${req.body}`)
})
app.listen(3000,()=>{
    console.log("listing....")
})
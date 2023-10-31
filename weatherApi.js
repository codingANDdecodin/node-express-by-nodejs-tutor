import  Express   from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import fetch  from "node-fetch";

const app=Express();
const port=process.env.PORT || 5001;
dotenv.config();
app.use(Express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("api is running......")
})
app.get("/weather",async(req,res)=>{
    if(!req.query.city){
        res.status(400);
        res.send("plase enter city")
    }else{
          const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
          const data=response.json();
           res.status(200);
           res.json(data);
    }
})
app.listen(port,()=>{
    console.log("listing.......")
})
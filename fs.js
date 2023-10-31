// const fs=require("fs")
import fs from "fs"
fs.open("./myfile.txt","r",(err)=>{
    console.log("created...")
    fs.writeFile("./myfile.txt","hiiiiiiiiii",(err)=>{
        console.log("inserted")

        fs.readFile("./myfile.txt","utf-8",(err,data)=>{
            const datach=data+"i am ajit";
            fs.writeFile("./myfile.txt",datach,(err)=>{
                console.log("updated...")


                fs.rename("./myfile.txt","updmyfile.txt",(err)=>{
                    console.log("updated name....")

                    fs.unlink("./updmyfile.txt",(err)=>{
                        console.log("deleted....")
                    })
                })
            })
    })
    })

})






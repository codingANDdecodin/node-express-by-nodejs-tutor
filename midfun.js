export function middle(){
    return((req,res,next)=>{
    
        console.log('mid excicute....')
        next();
    })
}


import { connectdata } from "../DB/index.js";
import { app } from "./app.js";


connectdata()
.then(() => {
    app.listen(process.env.PORT||8000,() =>{
        console.log(`Server is running on Port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("error: ",error);
    
})





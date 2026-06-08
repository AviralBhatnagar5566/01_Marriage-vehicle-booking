import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
});


const connectdata = async () =>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}`)
    } catch (error) {
        console.log("ERROR:",error)
        process.exit(1)
    }
}

export { connectdata }
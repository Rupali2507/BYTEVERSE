import mongoose  from "mongoose";

const connectDB =async(DATABASE_URL) =>{
    try{
        const DB_OPTIONS ={
            dbName : "candidates-info"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log('connected succesfully....')
     }
     catch(error) {
        console.log(error)
     }
}
export default connectDB;
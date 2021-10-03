import mongoose from "mongoose";



const connection  = async()=>{
    try{
    const URL =url   ///git ignore

   await mongoose.connect(URL,{useNewUrlParser : true});
   console.log("database connected");

    }catch(error){
        console.log('error while loading database' ,error);
    }
}

export default connection;
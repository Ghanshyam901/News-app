import News from "./Model/news.js";
import { data } from "./constants/data.js";

const Defaultdata = async()=>{
    try{
        await News.deleteMany({});
      await News.insertMany(data);
        console.log("data imported successfully...")
    }catch{
        console.log('error ', error.message);
    }
}

export default Defaultdata;
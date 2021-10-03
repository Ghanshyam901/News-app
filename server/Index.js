
import Express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';

//comp
import connection from "./Connection/DB.js";
import Defaultdata from "./default.js";
import Route from './routes/route.js';



const app = Express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))
app.use('/',Route);


const PORT = 8000;
connection();
app.listen(PORT,()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
Defaultdata();
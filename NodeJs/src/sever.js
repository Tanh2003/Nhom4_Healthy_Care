import express from "express";

import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
import connectDB from "./config/connectDB";

import cors from 'cors';
require ('dotenv').config();



let app =express();
app.use(cors({ credentials: true, origin: true }));
//config app


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


viewEngine(app)
initWebRouters(app);

connectDB();

let port =process.env.PORT || 6969;// LẤY PROT
//port == underfined => port=6969

app.listen(port,()=>{
    //callback
    console.log("Backend Nodejs is running on the port: " + port);
});


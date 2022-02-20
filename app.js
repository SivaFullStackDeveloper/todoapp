const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const router = require('./routers/routers');


dotenv.config();


let url = null;
let app = null;
let port = null;


const intialVar= async()=>{
    url = process.env.MONGO_URL;
    port=process.env.PORT;
    app= express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    app.use('/',router);

}
const listentoport = async()=>{
    app.listen(process.env.heroku || port,()=>{
        console.log(port);
    })
}

const connectiontodb = async()=>{
    

   try{
   
       
        mongoose.connect( url, {
            
           useNewUrlParser: false,
           autoIndex: false,
           bufferCommands: false,
       })
    console.log('coonnected to db');
}
    catch(error){
        console.log(error,'error connecting to db');
    }
}






intialVar().then(()=>{
    listentoport().then(()=>{
        connectiontodb();
    })
})


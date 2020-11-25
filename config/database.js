const mongoose = require('mongoose');
require('dotenv').config()

mongoose
    .connect(process.env.DB_URL,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Connected to DB.")
    })
    .catch((err)=>{
        console.log(`Error in connecting to DB:${err}`)
    })
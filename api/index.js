const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('mongo db connect')
}).catch(err => {
    console.log("err connecting to Mongo err",err)
})

app.listen(3000,()=>{
    console.log('server listening to port 3000')
})
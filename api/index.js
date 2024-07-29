const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route');

const app = express();
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('mongo db connect')
}).catch(err => {
    console.log("err connecting to Mongo err",err)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server listening to port '+ PORT)
})

app.use('/api/user',userRouter);

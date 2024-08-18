const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
var cors = require('cors')
const path = require("path");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('mongo db connect')
}).catch(err => {
    console.log("err connecting to Mongo err",err)
})

const __dirname = path.resolve()

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server listening to port '+ PORT)
})

app.use('/api/user',userRouter);
app.use('/api/auth', authRouter);

app.use(express.static(path.join(__dirname,'client/dist')))

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!'

    res.status(statusCode).json({message})
})

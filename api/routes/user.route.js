const express = require('express');
const User = require('../models/user.model')

const router = express.Router();

router.get("/test",(req, res) => {
    res.json({message:'api is working!'})
})

router.get("/",async (req,res) => {
    const users = await User.find();

    res.json(users);

})

router.put("/:id",async (req,res)=> {
    const user = await User.findByIdAndUpdate(req.params.id,req.body);

    res.json(user);
})

router.post("/",async (req,res) => {
    const user = new User(req.body);
    await user.save(); 

    res.json(user);
})

router.delete("/:id", async (req,res) => {
    const id  = req.params.id
    console.log("req.params",req.params)
    const user = await User.findByIdAndDelete(id)
    res.json({message: 'User deleted'});
})



module.exports = router
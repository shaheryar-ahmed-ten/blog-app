const express = require('express');
const User = require('../models/user.model')

const router = express.Router();

router.get("/test",(req, res) => {
    res.json({message:'api is working!'})
})

router.post("/",async (req,res) => {
    const user = new User(req.body);
    await user.save(); 

    res.json(user);
})

router.delete("/:id", async (req,res) => {
    const user = User.findByIdAndDelete("66a5f41e0dc24e6fdeb1fba8")
    res.json(user);
})


module.exports = router
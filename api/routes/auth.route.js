const express = require('express');
const User = require('../models/user.model')
var bcrypt = require('bcryptjs');

const router = express.Router();

router.post("/sign-up", async (req, res,next) => {
    try{
        const { username, email, password } = req.body;

        if(!username || !email || !password){
            return res.status(400).json({message:'All fields are required'})
        }

        // const emailExist = await User.findOne({email}).exec();
        // if(emailExist){
        //     return res.status(400).json({message:'User with this email already exist!'})
        // }

        const usernameExist = await User.findOne({username}).exec();
        if(usernameExist){
            return res.status(400).json({message:'User with this username already exist!'})
        }

        // var salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, 10);

        const user = new User({
            username,
            email,
            password: hashPassword
        });
        await user.save();

        res.status(200).json({data:user,message:'User signup sucessfully!'});
    }catch(err){
            next(err)
    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    //convert to hash

    //campare hash

    //find in db

    //return login success or failure

})

module.exports = router
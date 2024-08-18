const express = require('express');
const User = require('../models/user.model')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = '3a5d89b8c3a413b9eae5ab128d790ac1370be45b42d407af6c9a5d02945c2c55b13de595fe72606ec06d8d09646518b3cd813c19e6b343210c0b70d567fb8af0'
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

router.post('/login', async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Validate input
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
  
      // Find the user by email
      const user = await User.findOne({ email }).exec();
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Compare the provided password with the hashed password
      const isPasswordMatch = bcrypt.compareSync(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT token (optional, if using JWT for authentication)
      const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
      });
  
      // Respond with user data and token
      res.status(200).json({
        data: { user: { _id: user._id, email: user.email, username: user.username } },
        message: 'Login successful',
        token, // Include token in the response if using JWT
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router
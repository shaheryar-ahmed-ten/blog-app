const express = require('express');
const User = require('../models/user.model')
var bcrypt = require('bcryptjs');

const router = express.Router();

router.post("/", async (req, res) => {
    const { username, email, password } = req.body;

    // var salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, 10);

    const user = new User({
        username,
        email,
        password: hashPassword
    });
    await user.save();

    res.json(user);
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    //convert to hash

    //campare hash

    //find in db

    //return login success or failure

})

module.exports = router
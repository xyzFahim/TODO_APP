const express = require('express');
const router = express.Router();
const User = require('../../Models/User');

//Create a new User
router.post('/' , async(req, res) => {
  const userObj = {
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: req.body.password
  }
  const user = new User(userObj);
  await user.save();
  res.status(201).json(user);
})

module.exports = router
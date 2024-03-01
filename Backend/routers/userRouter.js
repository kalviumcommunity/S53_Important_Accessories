const express = require("express");
const User = require("../models/usermodel");
const router = express.Router();
const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require("bcrypt");
const cookieparser = require("cookie-parser")
const asyncHandler = require('express-async-handler')
const app=express();

app.use(cookieparser());

router.post("/signup", asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).send("User already Exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    const accessToken = jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {expiresIn: "1d"});
    res.cookie("user", accessToken, { httpOnly: true, maxAge: 10*24*60*60*1000 });
    // res.setHeader("user", accessToken, { httpOnly: true, maxAge: 10*24*60*60*1000 });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      accessToken: accessToken,
    });
  } else {
    res.status(400).send("Invalid user credentials")
  }
}));



router.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user){
        if(await bcrypt.compare(password, user.password)){

          const accessToken = jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {expiresIn: "1d"});

            res.cookie("user", accessToken, { httpOnly: true, maxAge: 10*24*60*60*1000 });
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                accessToken: accessToken,
              });
        }
    } else {
        res.status(400).send("Invalid Credentials")
    }
})); 

router.post("/logout", asyncHandler(async (req, res) => {
  res.cookie("user", "", {
    httpOnly: true,
    expires: new Date(0)
  });
  res.json({message: "user logged out"})
}));

module.exports = router;

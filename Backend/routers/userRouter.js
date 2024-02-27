const express = require("express");
const User = require("../models/usermodel");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.cookie("user", user.name, { httpOnly: true, maxAge: 10*24*60*60*1000 });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user){
        if(user.password === password){
            res.cookie("user", user.name, { httpOnly: true, maxAge: 10*24*60*60*1000 });
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
              });
        }
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
}); 

router.post("/logout", async (req, res) => {
  res.cookie("user", "", {
    httpOnly: true,
    expires: new Date(0)
  });
  res.json({message: "user logged out"})
});

module.exports = router;

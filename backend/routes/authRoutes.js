const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashed});
        await user.save();
        res.json({ message: "User created" });
    } catch (err) {
        res.status(400).json({ error: "User already exists..."});
    }

});


//login 
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "Invalid credentials"});

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials"});

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });

}); 

module.exports = router;



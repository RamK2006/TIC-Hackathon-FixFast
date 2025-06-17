const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, address, aadhar } = req.body;
  try {
    const existing = await User.findOne({ aadhar });
    if (existing) return res.status(400).json({ error: 'Aadhar already registered' });
    const user = new User({ name, address, aadhar, isVerified: true });
    await user.save();
    res.json({ msg: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { aadhar, role } = req.body;
  try {
    const user = await User.findOne({ aadhar });
    if (!user || !user.isVerified) return res.status(400).json({ error: 'Not verified' });
    const token = jwt.sign({ id: user._id, role: role === 'technician' ? 'technician' : 'user' }, process.env.AUTH_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

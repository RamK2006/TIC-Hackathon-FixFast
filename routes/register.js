const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Serviceman = require('../models/Serviceman');

router.post("/", async (req, res) => {
  const { name, phone, email, location, role } = req.body;
  try {
    if (role === "user") {
      await User.create({ name, phone, email, location });
    } else {
      await Serviceman.create({ name, phone, email, location, verified: false });
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Registration failed" });
  }
});

module.exports = router;

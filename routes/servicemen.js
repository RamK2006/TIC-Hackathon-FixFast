const express = require('express');
const Technician = require('../models/Technician');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const techs = await Technician.find({ isVerified: true });
    res.json(techs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;


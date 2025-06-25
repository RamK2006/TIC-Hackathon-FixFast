const express = require('express');
const router = express.Router();
const Serviceman = require('../models/Serviceman');

router.get('/', async (req, res) => {
  try {
    const servicemen = await Serviceman.find({ verified: true }); // Only verified
    res.json(servicemen);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch servicemen" });
  }
});

module.exports = router;



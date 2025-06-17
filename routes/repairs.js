const express = require('express');
const RepairEntry = require('../models/RepairEntry');
const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const repairs = await RepairEntry.find({ userId }).sort({ date: -1 });
    res.json(repairs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const entry = new RepairEntry(req.body);
    await entry.save();
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

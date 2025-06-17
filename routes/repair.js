const express = require("express");
const router = express.Router();
const RepairEntry = require("../models/RepairEntry");

// Get repair history
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  try {
    const repairs = await RepairEntry.find({ userId }).sort({ date: -1 });
    res.json(repairs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

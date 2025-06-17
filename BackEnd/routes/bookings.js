const express = require('express');
const jwt = require('express-jwt');
const Technician = require('../models/Technician');
const router = express.Router();

router.post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), async (req, res) => {
  const { technicianId, userId } = req.body;
  const technician = await Technician.findById(technicianId);
  if (!technician) return res.status(404).json({ error: 'Technician not found' });
  // Here you could create a Booking model if needed
  res.json({ technician });
});

module.exports = router;


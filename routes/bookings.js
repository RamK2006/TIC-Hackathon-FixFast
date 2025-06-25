const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// 📌 Create a new booking
router.post("/", async (req, res) => {
  const { userPhone, technicianId, technicianName, paymentMethod } = req.body;

  try {
    const newBooking = await Booking.create({
      userPhone,
      technicianId,
      technicianName,
      paymentMethod,
      status: "pending"
    });

    res.json({ success: true, booking: newBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Booking failed" });
  }
});

// ✅ (Optional) Confirm booking
router.post("/confirm/:id", async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: "confirmed" });
    res.json({ success: true });
  } catch {
    res.status(500).json({ success: false });
  }
});

module.exports = router;


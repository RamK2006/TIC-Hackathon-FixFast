require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('🔗 MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ✅ API Routes
app.use('/api/repairs', require('./routes/repairs'));
app.use('/api/users', require('./routes/users'));
app.use('/api/servicemen', require('./routes/servicemen'));
app.use('/api/bookings', require('./routes/bookings'));

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// (Optional for testing purposes)
module.exports = app;

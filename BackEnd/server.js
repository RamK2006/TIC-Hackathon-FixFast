require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('🔗 MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/repairs', require('./routes/repairs'));
app.use('/api/users', require('./routes/users'));
app.use('/api/servicemen', require('./routes/servicemen'));
app.use('/api/bookings', require('./routes/bookings'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// Export the app for testing purposes
module.exports = app;       
// This allows us to import the app in test files without starting the server
// and to use it with testing frameworks like Mocha or Jest.
// This is useful for unit testing or integration testing where we want to test the API endpoints without actually running the server.
// The app can be imported in test files like this:
// const app = require('./server');
// and then used with testing libraries to make requests to the API endpoints.
// This way, we can test the functionality of our API without needing to start the server each time.
// It also helps in keeping the server code clean and modular, separating the server setup from the
// application logic and routes. This is a common practice in Node.js applications to enhance maintainability and testability.
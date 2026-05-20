const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/travel');

// Trip Model
const Trip = mongoose.model('Trip', {
  destination: String,
  date: String,
  budget: String
});

// Root route (for browser)
app.get('/', (req, res) => {
  res.send('Travel API is running ');
});

// GET trips
app.get('/trips', async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
});

// ADD trip
app.post('/trips', async (req, res) => {
  const trip = new Trip({
    destination: req.body.destination,
    date: req.body.date,
    budget: req.body.budget
  });
  await trip.save();
  res.json(trip);
});

// DELETE trip
app.delete('/trips/:id', async (req, res) => {
  await Trip.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log('Server running on port 5000'));

app.get('/destinations', (req, res) => {
  res.json({
    total: Object.keys(destinationData).length,
    destinations: Object.keys(destinationData)
  });
});
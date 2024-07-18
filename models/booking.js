const mongoose = require('mongoose');

// Define a schema for passengers
const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  age: { type: Number, required: true },
  discount: { type: Number, default: 0 }
});

// Define a schema for bookings
const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  trainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Train',
    required: true
  },
  passengers: [passengerSchema],
  totalPrice: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Booked', 'Cancelled'], default: 'Booked' }
});

module.exports = mongoose.model('Booking', bookingSchema);


const Booking = require('../models/booking');

// Controller methods for bookings
const createBooking = async (req, res) => {
  try {
    const { userId, trainId, passengers, totalPrice } = req.body;
    
    // Validate input
    if (!userId || !trainId || !passengers || passengers.length === 0 || !totalPrice) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newBooking = new Booking({
      userId,
      trainId,
      passengers,
      totalPrice
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Unable to create booking' });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('trainId')
      .exec();

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Unable to fetch bookings' });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId).populate('trainId').populate('userId');
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    res.status(500).json({ error: 'Unable to fetch booking' });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { userId, trainId, passengers, totalPrice, status } = req.body;

    // Validate input
    if (!userId || !trainId || !passengers || passengers.length === 0 || !totalPrice) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(req.params.bookingId, req.body, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Unable to update booking' });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.bookingId);
    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Unable to delete booking' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
};



const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Routes related to bookings
router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:bookingId', bookingController.getBookingById);
router.put('/:bookingId', bookingController.updateBooking);
router.delete('/:bookingId', bookingController.deleteBooking);

module.exports = router;

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to register a new admin
router.post('/register', adminController.registerAdmin);
router.post('/verify', adminController.verifyAdmin);

module.exports = router;

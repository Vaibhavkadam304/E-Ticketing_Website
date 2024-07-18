const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

// Get all trains
router.get('/', trainController.getAllTrains);

// Create a new train
router.post('/', trainController.createTrain);

// Get a train by ID
router.get('/:id', trainController.getTrain, trainController.getTrainById);

// Update a train
router.patch('/:id', trainController.getTrain, trainController.updateTrain);

// Delete a train
router.delete('/:id', trainController.getTrain, trainController.deleteTrain);

module.exports = router;

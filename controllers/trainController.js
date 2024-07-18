const Train = require('../models/Train');

// Get all trains
const getAllTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new train
const createTrain = async (req, res) => {
  const train = new Train({
    name: req.body.name,
    from: req.body.from,
    to: req.body.to,
    date: req.body.date,
    price: req.body.price
  });

  try {
    const newTrain = await train.save();
    res.status(201).json(newTrain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a train by ID
const getTrainById = async (req, res) => {
  res.json(res.train);
};

// Update a train
const updateTrain = async (req, res) => {
  if (req.body.name != null) {
    res.train.name = req.body.name;
  }
  if (req.body.from != null) {
    res.train.from = req.body.from;
  }
  if (req.body.to != null) {
    res.train.to = req.body.to;
  }
  if (req.body.date != null) {
    res.train.date = req.body.date;
  }
  if (req.body.price != null) {
    res.train.price = req.body.price;
  }
  try {
    const updatedTrain = await res.train.save();
    res.json(updatedTrain);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a train
const deleteTrain = async (req, res) => {
  try {
    await res.train.remove();
    res.json({ message: 'Deleted Train' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to get train by ID
const getTrain = async (req, res, next) => {
  let train;
  try {
    train = await Train.findById(req.params.id);
    if (train == null) {
      return res.status(404).json({ message: 'Cannot find train' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.train = train;
  next();
};

module.exports = {
  getAllTrains,
  createTrain,
  getTrainById,
  updateTrain,
  deleteTrain,
  getTrain
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensures emails are unique
  },
  password: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

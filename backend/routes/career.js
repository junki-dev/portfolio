const mongoose = require('mongoose');

// Define Schemes
const careerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  startDate: { type: String, required: true },
  endDate: { type: String, default: true },
  work: { type: String, default: true },
  participants: { type: String, default: true },
});

// Create Model & Export
module.exports = mongoose.model('Career', careerSchema);
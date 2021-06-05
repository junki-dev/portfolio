const mongoose = require('mongoose');
const { Schema } = mongoose;

// 경력 스키마 정의
const careerSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    work: { type: String, required: true },
    participants: { type: Number, required: true },
    skill: { type: [String], required: true },
    perform: { type: [String], required: true },
  },
  { collection: `career` },
);

// Model 모듈화
module.exports = mongoose.model('career', careerSchema);

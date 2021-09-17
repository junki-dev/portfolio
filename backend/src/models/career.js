const mongoose = require('mongoose');
const { Schema } = mongoose;

// 경력 스키마 정의
const CareerSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: false },
    work: { type: String, required: true },
    participants: { type: Number, required: true },
    description: { type: String, required: true },
    skill: { type: [String], required: true },
    perform: { type: [String], required: true },
    useYn: { type: String, required: true },
    completeYn: { type: String, required: true },
  },
  { collection: `career` },
);

// Model 모듈화
module.exports = mongoose.model('Career', CareerSchema);

const mongoose = require('mongoose');

const { Schema } = mongoose;

// troubleshooting 스키마 정의
const TroubleshootingSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// 기술 스택 스키마 정의
const TeckSchema = new Schema({
  name: { type: String, required: true },
  projects: { type: Number, required: false },
  ability: { type: String, required: true },
  toubleshooting: { type: [TroubleshootingSchema], required: true },
});

// 기술 스키마 정의
const SkillSchema = new Schema(
  {
    name: { type: String, required: true },
    teckStack: { type: [TeckSchema], required: false },
  },
  { collection: `skill` },
);

// Model 모듈화
module.exports = mongoose.model('Skill', SkillSchema);

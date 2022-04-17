import mongoose from 'mongoose';

const { Schema } = mongoose;

// troubleshooting 스키마 정의
const TroubleshootingSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// 기술 상세 스키마 정의
const SkillDetailSchema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
});

// 기술 스택 스키마 정의
const TechSchema = new Schema({
  type: { type: String, required: true },
  skills: { type: [SkillDetailSchema], required: true },
});

// 기술 스키마 정의
const SkillSchema = new Schema(
  {
    name: { type: String, required: true },
    techStack: { type: [TechSchema], required: false },
  },
  { collection: `skill` }
);

// Model 모듈화
export default mongoose.model('Skill', SkillSchema);

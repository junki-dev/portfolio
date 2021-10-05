import mongoose from 'mongoose';

const { Schema } = mongoose;

const ExperienceSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: [String], required: true },
});

const TroubleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

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
    summary: { type: String, required: false },
    description: { type: String, required: true },
    skill: { type: [String], required: true },
    experience: { type: [ExperienceSchema], required: true },
    troubleshooting: { type: [TroubleSchema], required: false },
    useYn: { type: String, required: true },
    completeYn: { type: String, required: true },
  },
  { collection: `career` },
);

// Model 모듈화
export default mongoose.model('Career', CareerSchema);

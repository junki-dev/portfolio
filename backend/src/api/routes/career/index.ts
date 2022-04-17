import express from 'express';
import careerController from '@src/controller/career/careerController';

const careerRouter = express.Router();

// 경력 목록 조회
careerRouter.get('/', careerController.getCareerList);

// 경력 상세 조회
careerRouter.get('/getCareerById', careerController.getCareerDetail);

export default careerRouter;

import express from 'express';

import careerController from '../../controller/career/careerController.js';

const careerRouter = express.Router();

// 경력 목록 조회
careerRouter.get('/', careerController.getCareerList);

// 경력 상세 조회
careerRouter.get('/getCareerById', careerController.getCareerDetail);

export default careerRouter;

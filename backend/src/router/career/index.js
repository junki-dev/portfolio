import express from 'express';
import careerController from './../../controller/career/index.js';

const careerRouter = express.Router();

careerRouter.get('/', careerController.getCareerList);
careerRouter.get('/getCareerById', careerController.getCareerDetail);

export default careerRouter;

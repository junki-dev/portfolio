import express from 'express';
import skillController from '../../controller/skill/index.js';

const skillRouter = express.Router();

skillRouter.get('/', skillController.getSkillMenuList);
skillRouter.get('/getSkillByName', skillController.getSkillDetail);

export default skillRouter;

import express from 'express';
import skillController from '@src/components/skill/skillController';

const skillRouter = express.Router();

// 기술 스택 메뉴 목록 조회
skillRouter.get('/', skillController.getSkillMenuList);

// 기술 스택 상세 조회
skillRouter.get('/getSkillByName', skillController.getSkillDetail);

export default skillRouter;
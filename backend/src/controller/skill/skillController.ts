import { setResponse, resultCode } from '@src/config/commonResponse';
import logger from '@src/config/logger';
import Skill from '@src/models/skill';

// 기술 스택 메뉴 목록 조회
const getSkillMenuList = async (req: any, res: any) => {
  logger.debug(`# [ skillController - getSkillMenuList ] - 기술 메뉴 목록 조회 API가 호출 되었습니다.`);

  // 데이터 조회
  Skill.find()
    .sort({ order: 1 })
    .then((data: any) => {
      setResponse(res, resultCode.SUCCESS, data);
    })
    .catch((err: Error) => {
      logger.debug(`# [ skillController - getSkillMenuList ] - ${err}`);
      setResponse(res, resultCode.DATABASE_ERROR, null);
    });
};

// 기술 스택 상세 조회
const getSkillDetail = async (req: any, res: any) => {
  logger.debug(`# [ skillController - getSkillDetail ] - ${req.query.name} 경력 상세 조회 API가 호출 되었습니다.`);

  const skillName = req.query.name;

  // 데이터 조회
  Skill.findOne({ name: { $regex: skillName, $options: 'i' } })
    .then((data: any) => {
      setResponse(res, resultCode.SUCCESS, data);
    })
    .catch((err: Error) => {
      logger.debug(`# [ skillController - getSkillDetail ] - ${err}`);
      setResponse(res, resultCode.DATABASE_ERROR, null);
    });
};

export default { getSkillMenuList, getSkillDetail };

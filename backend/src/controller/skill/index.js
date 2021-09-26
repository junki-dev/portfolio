import skillService from '../../service/skill/skillService.js';
import logger from '../../config/winston.js';
import { setResponse } from '../../config/commonResponse.js';

const getSkillMenuList = async (request, response) => {
  logger.debug(
    `## [ skillController - getSkillMenuList() ] - 기술 메뉴 목록 조회 API가 호출 되었습니다.`,
  );

  skillService.getSkillMenuList((code, data) => {
    return setResponse(response, code, data);
  });
};

const getSkillDetail = async (request, response) => {
  logger.debug(
    `### [ skillController - getSkillDetail() ] - ${request.query.id} 경력 상세 조회 API가 호출 되었습니다.`,
  );

  const skillName = request.query.name;
  skillService.getSkillDetail(skillName, (code, data) => {
    return setResponse(response, code, data);
  });
};

export default { getSkillMenuList, getSkillDetail };

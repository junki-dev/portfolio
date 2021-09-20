const skillService = require('../../service/skill/skillService');
const logger = require('../../config/winston');
const { setResponse } = require('../../config/commonResponse');

exports.getSkillMenuList = async (request, response) => {
  logger.debug(
    `## [ skillController - getSkillMenuList() ] - 기술 메뉴 목록 조회 API가 호출 되었습니다.`,
  );

  skillService.getSkillMenuList((code, data) => {
    return setResponse(response, code, data);
  });
};

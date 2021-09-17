const careerService = require('../../service/careerService');
const logger = require('../../config/winston');
const { setResponse } = require('../../config/commonResponse');
// const career = require('../../models/career');

exports.getCareerList = async (request, response) => {
  logger.debug(
    `## [ careerController - getCareerList() ] - 경력 조회 API가 호출 되었습니다.`,
  );

  careerService.getCareerList((code, data) => {
    return setResponse(response, code, data);
  });
};

exports.getCareerDetail = async (request, response) => {
  logger.debug(
    `### [ careerController - getCareerDetail() ] - ${request.query.id} 경력 상세 조회 API가 호출 되었습니다.`,
  );

  const careerId = request.query.id;
  careerService.getCareerDetail(careerId, (code, data) => {
    return setResponse(response, code, data);
  });
};

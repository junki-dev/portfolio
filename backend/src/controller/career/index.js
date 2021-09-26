import careerService from './../../service/career/careerService.js';
import logger from '../../config/winston.js';
import { setResponse } from '../../config/commonResponse.js';

const getCareerList = async (request, response) => {
  logger.debug(
    `## [ careerController - getCareerList() ] - 경력 조회 API가 호출 되었습니다.`,
  );

  careerService.getCareerList((code, data) => {
    return setResponse(response, code, data);
  });
};

const getCareerDetail = async (request, response) => {
  logger.debug(
    `### [ careerController - getCareerDetail() ] - ${request.query.id} 경력 상세 조회 API가 호출 되었습니다.`,
  );

  const careerId = request.query.id;
  careerService.getCareerDetail(careerId, (code, data) => {
    return setResponse(response, code, data);
  });
};

export default { getCareerList, getCareerDetail };

import { resultCode, setResponse } from '@src/config/commonResponse';
import logger from '@src/config/logger';
import Career from '@src/models/career';

// 경력 목록 조회
const getCareerList = (req: any, res: any) => {
  logger.debug(`# [ careerController - getCareerList ] - 경력 조회 API가 호출 되었습니다.`);

  // 데이터 조회
  Career.find()
    .sort({ startDate: -1, endDate: -1 })
    .then((data: any) => {
      setResponse(res, resultCode.SUCCESS, data);
    })
    .catch((err: Error) => {
      logger.debug(`# [ careerController - getCareerList ] - ${err}`);
      setResponse(res, resultCode.DATABASE_ERROR, null);
    });
};

// 경력 상세 조회
const getCareerDetail = async (req: any, res: any) => {
  logger.debug(`# [ careerController - getCareerDetail() ] - ${req.query.id} 경력 상세 조회 API가 호출 되었습니다.`);

  const careerId = req.query.id;

  // 데이터 조회
  Career.findOne({ id: careerId })
    .then((data: any) => {
      setResponse(res, resultCode.SUCCESS, data);
    })
    .catch((err: Error) => {
      logger.debug(`# [ careerController - getCareerDetail() ] - ${err}`);
      setResponse(res, resultCode.DATABASE_ERROR, null);
    });
};

export default { getCareerList, getCareerDetail };

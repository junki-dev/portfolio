import logger from '../../config/winston.js';
import Career from '../../models/career.js';
import { resultCode } from '../../config/commonResponse.js';

const getCareerList = callback => {
  try {
    Career.find()
      .sort({ startDate: -1, endDate: -1 })
      .then(data => {
        callback(resultCode.SUCCESS, data);
      });
  } catch (error) {
    logger.debug(`## getCareerList() ERROR - ${error}`);
    callback(resultCode.DATABASE_ERROR, null);
  }
};

const getCareerDetail = (careerId, callback) => {
  try {
    Career.findOne({ id: careerId }).then(data => {
      callback(resultCode.SUCCESS, data);
    });
  } catch (error) {
    logger.debug(`## getCareerList() ERROR - ${error}`);
    callback(resultCode.DATABASE_ERROR, null);
  }
};

export default { getCareerList, getCareerDetail };

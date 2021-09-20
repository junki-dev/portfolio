const logger = require('../../config/winston');
const Career = require('../../models/career');
const { resultCode } = require('../../config/commonResponse');

exports.getCareerList = callback => {
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

exports.getCareerDetail = (careerId, callback) => {
  try {
    Career.findOne({ id: careerId }).then(data => {
      callback(resultCode.SUCCESS, data);
    });
  } catch (error) {
    logger.debug(`## getCareerList() ERROR - ${error}`);
    callback(resultCode.DATABASE_ERROR, null);
  }
};

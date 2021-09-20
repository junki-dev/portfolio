const logger = require('../../config/winston');
const Skill = require('../../models/skill');
const { resultCode } = require('../../config/commonResponse');

exports.getSkillMenuList = callback => {
  try {
    Skill.find()
      .sort({ order: 1 })
      .then(data => {
        callback(resultCode.SUCCESS, data);
      });
  } catch (error) {
    logger.debug(`## getCareerList() ERROR - ${error}`);
    callback(resultCode.DATABASE_ERROR, null);
  }
};

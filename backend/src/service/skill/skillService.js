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
    logger.debug(`## getSkillMenuList() ERROR - ${error}`);
    callback(resultCode.DATABASE_ERROR, null);
  }
};

exports.getSkillDetail = (skillName, callback) => {
  try {
    Skill.findOne({ name: { $regex: skillName, $options: 'i' } }).then(data => {
      callback(resultCode.SUCCESS, data);
    });
  } catch (error) {
    logger.debug(`## getSkillDetail() ERROR - ${error}`);
    callback(resultCode.DATABASE_ERROR, null);
  }
};

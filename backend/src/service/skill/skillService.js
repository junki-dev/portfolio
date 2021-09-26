import logger from '../../config/winston.js';
import Skill from '../../models/skill.js';
import { resultCode } from '../../config/commonResponse.js';

const getSkillMenuList = callback => {
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

const getSkillDetail = (skillName, callback) => {
  try {
    Skill.findOne({ name: { $regex: skillName, $options: 'i' } }).then(data => {
      callback(resultCode.SUCCESS, data);
    });
  } catch (error) {
    logger.debug(`## getSkillDetail() ERROR - ${error}`);
    callback(resultCode.DATABASE_ERROR, null);
  }
};

export default { getSkillMenuList, getSkillDetail };

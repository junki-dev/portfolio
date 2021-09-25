const express = require('express');
const skillController = require('../../controller/skill');

const router = express.Router();

router.get('/', skillController.getSkillMenuList);
router.get('/getSkillByName', skillController.getSkillDetail);

module.exports = router;

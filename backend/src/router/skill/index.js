const express = require('express');
const skillController = require('../../controller/skill');

const router = express.Router();

router.get('/', skillController.getSkillMenuList);

module.exports = router;

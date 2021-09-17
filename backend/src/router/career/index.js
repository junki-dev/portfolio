const express = require('express');
const careerController = require('../../controller/career');

const router = express.Router();

router.get('/', careerController.getCareerList);
router.get('/getCareerByData', careerController.getCareerDetail);

module.exports = router;

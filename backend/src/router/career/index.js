const express = require('express');
const careerController = require('../../controller/career');

const router = express.Router();

router.get('/', careerController.getCareerList);
router.get('/getCareerById', careerController.getCareerDetail);

module.exports = router;

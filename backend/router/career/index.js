const express = require('express');
const router = express.Router();
const logger = require('log4js').getLogger('career');

let career = require('./../../models/career');

// 경력 목록 조회
router.get('/', (req, res) => {
  logger.info(`경력 목록 조회 API가 호출되었습니다.`);

  career.find((err, careers) => {
    // 에러 처리
    if (err) return res.status(500).send({ error: 'database failure' });

    res.json(careers);
  });
});

module.exports = router;

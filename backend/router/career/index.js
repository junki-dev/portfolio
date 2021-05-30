const express = require('express');
const router = express.Router();

let career = require('./../../models/career');

// 경력 목록 조회
router.get('/', res => {
  career.find((err, careers) => {
    if (err) return res.status(500).send({ error: 'database failure' });

    res.json(careers);
  });
});

module.exports = router;

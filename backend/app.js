require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const log4js = require('log4js');

// 로그 설정
try {
  log4js.configure(process.env.LOGENV_FILE);
} catch (error) {
  console.log(`LOG_ENVIRONMENT_ERROR:${error.message}`);
  process.exit(1);
}
const logger = log4js.getLogger('app');

const app = express();
const { PORT, MONGO_URI } = process.env;

// middleware 설정
/// CORS(Cross Origin Resource Sharing) 에러 해결을 위한 미들웨어(react 서버를 별도로 사용하기 때문)
app.use(cors());

// MongoDB 연결
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('Successfully connected to mongodb'))
  .catch(e => logger.error(e));

// 라우팅
app.use('/career', require('./router/career'));

// 서버 구동
app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));

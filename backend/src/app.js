require('dotenv').config(); // 환경변수를 파일에 저장하기 위한 패키지
const express = require('express'); // 웹어플리케이션 개발을 위한 패키지
const cors = require('cors'); // cors에러를 위한 패키지 : 삭제 예정
const mongoose = require('mongoose'); // mongodb 연결을 위한 패키지
const logger = require('./config/winston'); // winston 로그 설정

logger.debug(`# JUNKI PORTFOLIO BACKEND SERVER STARTing...`);
const app = express(); // 애플리케이션 미들웨어 바인딩
const { PORT, MONGO_URI } = process.env; // 서버 포트 지정

/* middleware 설정 */
/// CORS(Cross Origin Resource Sharing) 에러 해결을 위한 미들웨어(react 서버를 별도로 사용하기 때문) 삭제 예정
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

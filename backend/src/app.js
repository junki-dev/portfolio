import './config/environment.js'; // 환경변수를 파일에 저장하기 위한 패키지
import express from 'express'; // 웹어플리케이션 개발을 위한 패키지
import mongoose from 'mongoose'; // mongodb 연결을 위한 패키지지
import path from 'path'; // 파일과 Directory 경로 작업을 위한 패키지
import cors from 'cors'; // cors에러를 위한 패키지 : 삭제 예정
import logger from './config/winston.js'; // winston 로그 설정
import careerRouter from './router/career/index.js'; // career 라우터
import skillRouter from './router/skill/index.js'; // career 라우터

logger.debug(`# JUNKI PORTFOLIO BACKEND SERVER STARTing...`);
const app = express(); // 애플리케이션 미들웨어 바인딩
const __dirname = path.resolve(); // 디렉토리의 절대경로를 반환
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
app.use(express.static(`${__dirname}/public`)); // 메인화면
app.use('/career', careerRouter); // 경력 관련 routing
app.use('/skill', skillRouter); // 기술 관련 routing

// 서버 구동
app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));

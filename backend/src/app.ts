import express from 'express'; // 웹어플리케이션 개발을 위한 패키지
import path from 'path'; // 파일과 Directory 경로 작업을 위한 패키지
import cors from 'cors'; // cors에러를 위한 패키지
import dotenv from 'dotenv'; // 환경변수를 파일에 저장하기 위한 패키지
import logger from '@src/config/logger'; // winston 로그 설정
import careerRouter from '@src/components/career/careerApi'; // career 라우터
import skillRouter from '@src/components/skill/skillApi'; // career 라우터
import { dbConnect } from '@src/loaders/connect/database'; // mongodb 유틸

logger.debug(`# JUNKI PORTFOLIO BACKEND SERVER STARTing...`);

dotenv.config(); // 환경변수 적용
// const __dirname = path.resolve(); // 디렉토리의 절대경로를 반환
const port = process.env.PORT; // 서버 포트 지정

/* middleware 설정 */
const app = express(); // 애플리케이션 미들웨어 바인딩

/// CORS(Cross Origin Resource Sharing) 에러 해결을 위한 미들웨어
app.use(cors());

// MongoDB 연결
const connectionInfo = `${process.env.USER_ID}:${process.env.USER_PWD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
dbConnect(connectionInfo);

// 라우팅
app.use(express.static(`${__dirname}/build`)); // 메인화면
app.use('/bo/career', careerRouter); // 경력 관련 routing
app.use('/bo/skill', skillRouter); // 기술 관련 routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build`, 'index.html'));
});

// 서버 구동
app.listen(port, () => logger.info(`Server listening on port ${port}`));

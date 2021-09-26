import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const logDir = 'logs'; // logs 디렉토리 하위에 로그 파일 저장
const { combine, timestamp, printf } = winston.format;

// 로그 형식 정의
const logFormat = printf(({ timestamp, level, message, stack }) => {
  if (stack) return `${timestamp} ${level} - ${message}\n${stack}`;
  else return `${timestamp} ${level} - ${message}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    new winston.transports.Console({
      // 콘솔 출력
      name: 'debug-console',
      colorize: true,
      level: 'debug', // debug이상 콘솔 출력
      showLevel: true,
      json: false,
      timestamp: 'YYYY-MM-DD HH:mm:ss',
    }),
    new winstonDaily({
      // info 레벨 로그를 저장할 파일 설정
      level: process.env.LOG_LEVEL,
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: `portfoilo_%DATE%.log`,
      maxFiles: 365, // 30일치 로그 파일 저장
      zippedArchive: true,
    }),
    new winstonDaily({
      // error 레벨 로그를 저장할 파일 설정
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir, // error.log 파일은 /logs/error 하위에 저장
      filename: `portfoilo-error_%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

export default logger;

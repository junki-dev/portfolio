import winston from 'winston'; // 로깅 설정을 위한 패키지
import winstonDaily from 'winston-daily-rotate-file'; // 일별 로그 로테이션을 위한 패키지

const { combine, timestamp, printf, colorize } = winston.format;
const logDir = 'logs'; // logs 디렉토리 하위에 로그 파일명

// 로그 레벨
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// 로그 레벨 별 색상
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// 로그 레벨 별, 색상 지정
winston.addColors(colors);

// 로그 레벨 지정(debug와 info 만 지정 가능)
const level = () => {
  return process.env.LOG_LEVEL === 'info' ? 'info' : 'debug';
};

// 로그 형식 지정
const logFormat = combine(
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  printf(info => {
    if (info.stack) {
      return `${info.timestamp} ${info.level}: ${info.message} \n Error Stack: ${info.stack}`;
    }
    return `${info.timestamp} ${info.level}: ${info.message}`;
  }),
);

// 콘솔에 찍힐 때는 색깔을 구변해서 로깅 수행
const consoleOpts = {
  handleExceptions: true,
  level: process.env.LOG_LEVEL === 'info' ? 'info' : 'debug',
  format: combine(
    colorize({ all: true }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  ),
};

// 로그 설정
const transports = [
  // 콘솔로그에만 색상 구분
  new winston.transports.Console(consoleOpts),
  // Info 로그를 저장할 파일 설정
  new winstonDaily({
    level: 'info',
    datePattern: 'YYYY-MM-DD',
    dirname: logDir,
    filename: 'portfolio_%DATE%.log',
    maxFiles: 30,
    zippedArchive: true,
  }),
  // 모든 레벨 로그를 저장할 파일 설정
  new winstonDaily({
    level: 'debug',
    datePattern: 'YYYY-MM-DD',
    dirname: logDir,
    filename: 'portfolio_%DATE%.log',
    maxFiles: 30,
    zippedArchive: true,
  }),
];

// logger 모듈 생성
const logger = winston.createLogger({
  level: level(),
  levels,
  format: logFormat,
  transports,
});

export default logger;

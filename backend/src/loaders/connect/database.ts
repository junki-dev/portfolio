import mongoose from 'mongoose'; // mongodb 연결을 위한 패키지지
import logger from '@src/config/logger'; // winston 로그 설정

export const dbConnect = (info: any) => {
  return new Promise<void>((resolve, reject) => {
    mongoose
      .connect(`mongodb://${info}?authSource=admin&authMechanism=SCRAM-SHA-1`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        logger.info(`# [ mongooseUtil - connect ] Successfully connected to mongoDB`);
        resolve();
      })
      .catch((err) => {
        logger.error(`# [ mongooseUtil - connect ] mongoDB connection failed ${err}`);
        reject();
      });
  });
};

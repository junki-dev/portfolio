const resultCode = {
  SUCCESS: { status: 200, code: '0', message: '성공' },
  INVALID_PARAMETER: {
    status: 400,
    code: 'INVALID_PARAMETER',
    message: '파라미터가 유효하지 않습니다.',
  },
  DATABASE_ERROR: {
    status: 500,
    code: 'DATABASE_ERROR',
    message: '데이터베이스 에러가 발생했습니다.',
  },
  ETC_ERROR: {
    status: 500,
    code: 'ETC_ERROR',
    message: '서버 에러가 발생했습니다.',
  },
};

const setResponse = (response, resultCode, data) => {
  // let resultObj;
  const commonObj = {
    resultCode: resultCode.code,
    resultMessage: resultCode.message,
    data: null,
  };

  if (data) {
    commonObj.data = data;
  }

  return response.status(resultCode.status).json(commonObj);
};

export { resultCode, setResponse };

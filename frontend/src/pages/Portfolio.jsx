import React, { useState, useEffect } from 'react';

import TypingEffect from '../components/TypingEffect';

const Portfolio = () => {
  // Home화면 진입 전, Typing 효과 적용을 위한 State 값 설정
  const [typingEffect, setTypingEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTypingEffect(false);
    }, 11000);
  }, []);

  return <div>{typingEffect && <TypingEffect />}</div>;
};

export default Portfolio;

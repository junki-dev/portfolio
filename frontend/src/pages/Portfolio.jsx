import React, { useState, useEffect } from 'react';

import TypingEffect from '../components/TypingEffect';
import Home from './Home';

const Portfolio = () => {
  // Home화면 진입 전, Typing 효과 적용을 위한 State 값 설정
  const [typingEffect, setTypingEffect] = useState(true);
  const [homeEffect, setHomEffect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTypingEffect(false);
      setHomEffect(true);
    }, 1000);
  }, []);

  return (
    <div>
      {typingEffect && <TypingEffect />}
      {homeEffect && <Home />}
    </div>
  );
};

export default Portfolio;

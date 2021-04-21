import React from 'react';
import TypeWriterEffect from 'typewriter-effect';

import '../assets/TypingEffect.css';

const TypingEffect = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="typing">
          <TypeWriterEffect
            onInit={typewriter => {
              typewriter
                .pauseFor(1000)
                .typeString('안녕하세요.')
                .pauseFor(2000)
                .deleteAll()
                .typeString('저는 ___')
                .pauseFor(300)
                .deleteChars(3)
                .typeString('개발자')
                .pauseFor(300)
                .deleteChars(3)
                .typeString('김준기입니다.')
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypingEffect;

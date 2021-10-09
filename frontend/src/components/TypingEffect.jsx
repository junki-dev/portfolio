import React, { useEffect, useState } from 'react';
import TypeWriterEffect from 'typewriter-effect';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

// typingEffect 컨테이너 style
const TypingEffectionContainer = styled.div`
  display: table;
  width: 100vw;
  height: 100vh;
`;

// typingEffect 영역 style
const TypingEffectionSection = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

// typingEffect 내용 style
const TypingEffectionContent = styled.div`
  font-size: xx-large;
  font-weight: 700;
  color: black;
  text-align: center;
`;

const TypingEffect = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 15000);
  }, []);

  return (
    <TypingEffectionContainer>
      <TypingEffectionSection>
        <TypingEffectionContent>
          <TypeWriterEffect
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString('안녕하세요.')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Backend')
                .pauseFor(300)
                .deleteChars(6)
                .typeString('lockchain 개발자')
                .pauseFor(300)
                .deleteAll(3)
                .typeString('김준기입니다.')
                .deleteAll()
                .pauseFor(300)
                .typeString('WELCOME!')
                .start();
            }}
          />
          {redirect && <Redirect to="/about" />}
        </TypingEffectionContent>
      </TypingEffectionSection>
    </TypingEffectionContainer>
  );
};

export default TypingEffect;

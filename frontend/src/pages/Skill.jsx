import React from 'react';

import Sidebar from '../components/Menu/Sidebar';
import WordCloud from '../components/WordCloud/WordCloud';

const Skill = () => {
  return (
    <div className="home">
      <Sidebar />
      <span>skill 페이지입니다.</span>
      <WordCloud />
    </div>
  );
};

export default Skill;

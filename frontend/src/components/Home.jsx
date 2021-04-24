import React from 'react';

import Header from './Header';
import Career from './Career';
import WordCloud from './WordCloud';
import Experience from './Experience';

import '../assets/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Career />
      <WordCloud />
      <Experience />
    </div>
  );
};

export default Home;

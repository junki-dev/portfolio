import React from 'react';

import Header from './Header';
import WordCloud from './WordCloud';

import '../assets/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <WordCloud />
    </div>
  );
};

export default Home;

import React from 'react';

import Header from './Header';
import Profile from './Profile';
import WordCloud from './WordCloud';

import '../assets/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Profile />
      <WordCloud />
    </div>
  );
};

export default Home;

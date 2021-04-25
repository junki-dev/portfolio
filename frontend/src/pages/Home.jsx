import React from 'react';

import Header from '../components/Header';
import Career from '../components/Career';
import WordCloud from '../components/WordCloud';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

import '../assets/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Career />
      <WordCloud />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;

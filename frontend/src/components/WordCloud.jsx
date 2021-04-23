import React, { useState } from 'react';

import ReactWordcloud from 'react-wordcloud';
import { selection } from 'd3-selection';
import 'd3-transition';
// import PropTypes from 'prop-types';

import Words from './MyWord';
import Modal from './Modal';

import '../assets/WordCloud.css';

// const size = [50, 400];
const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontSizes: [50, 50],
};

const MyWordCloud = () => {
  // Modal 창 활성화 여부
  const [showModal, setShowModal] = useState(false);
  const [nowWord, setNowWord] = useState('');

  // Modal 창 활성화
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Modal 창 비활성화
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNowWord = word => {
    console.log(word);
    setNowWord(word);
  };

  function getCallback(callback) {
    return (word, event) => {
      const isActive = callback !== 'onWordMouseOut';
      const element = event.target;
      const text = selection(element);
      text
        .on('click', () => {
          if (isActive) {
            handleNowWord(word.text);
            handleOpenModal();
            // setNowWord(word.text);
          }
        })
        .transition()
        .attr('background', 'white')
        .attr('font-size', isActive ? '200%' : '100%')
        .attr('text-decoration', isActive ? 'underline' : 'none');
    };
  }

  const callbacks = {
    getWordTooltip: word =>
      `The word "${word.text}" appears ${word.value} times.`,
    onWordClick: getCallback('onWordClick'),
    onWordMouseOut: getCallback('onWordMouseOut'),
    onWordMouseOver: getCallback('onWordMouseOver'),
  };

  return (
    <div className="skills-section">
      <p className="skills-title">Skills</p>
      <hr className="skills-hr" />
      <div className="skills-box">
        <ReactWordcloud
          className="skills-box"
          callbacks={callbacks}
          words={Words}
          options={options}
        />
      </div>
      {showModal && (
        <Modal
          show={showModal}
          word={nowWord}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MyWordCloud;

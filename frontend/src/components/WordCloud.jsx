import React, { useState } from 'react';

import ReactWordcloud from 'react-wordcloud';
import { selection } from 'd3-selection';
import 'd3-transition';
import ReactModal from 'react-modal';

import Words from './MyWord';

const size = [300, 100];
const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontSizes: [50, 50],
};

const MyWordCloud = () => {
  // Modal 창 활성화 여부
  const [showModal, setShowModal] = useState(false);

  // // Modal 창 활성화
  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  // Modal 창 비활성화
  const handleCloseModal = () => {
    setShowModal(false);
  };

  function getCallback(callback) {
    return (word, event) => {
      const isActive = callback !== 'onWordMouseOut';
      const element = event.target;
      const text = selection(element);
      text
        .on('click', () => {
          if (isActive) {
            setShowModal(true);
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
    <div className="container">
      <ReactWordcloud
        className="wordcloud"
        callbacks={callbacks}
        words={Words}
        size={size}
        options={options}
      />
      <h1>{showModal}</h1>
      <h1>{setShowModal}</h1>
      <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
        <button type="button" onClick={handleCloseModal}>
          Close Modal
        </button>
      </ReactModal>
    </div>
  );
};

export default MyWordCloud;

import React from 'react';

import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import '../assets/Modal.css';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    right: '10%',
    bottom: '10%',
    border: '1px solid #ccc',
    background: '#fff',
    // overflow: 'auto',
    // WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    marginBotton: '0',
    padding: '0',
  },
};

const Modal = ({ show, word, handleCloseModal }) => {
  return (
    <div>
      {show && (
        <ReactModal
          style={style}
          isOpen={show}
          contentLabel={word}
          ariaHideApp={false}
          onRequestClose={handleCloseModal}
        >
          <div className="modal-header">
            <h1 className="modal-title">{word}</h1>
            <button type="button" className="close" onClick={handleCloseModal}>
              &times;
            </button>
          </div>
          <div className="modal-content">
            <p>1111</p>
          </div>
        </ReactModal>
      )}
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;

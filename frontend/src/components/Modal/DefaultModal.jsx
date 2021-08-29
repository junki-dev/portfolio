import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HR from '../HR';

const customStyles = {
  content: {
    top: '10%',
    left: '35%',
    right: '55%',
    bottom: '10%',
    marginRight: '-50%',
    borderRadius: '20px',
  },
};

// 모달 버튼 style
const ModalButton = styled.span`
  width: 100%;
  letter-spacing: 0em;
  font-size: 2vw;
  font-family: EconomicBold;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

// 모달 컨테이너 style
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// 모달 헤더 style
const ModaulHeader = styled.span`
  height: 10%;
  width: 100%;
  letter-spacing: 0em;
  font-size: 1.5vw;
  font-family: EconomicBold;
`;

// 모달 내용 style
const ModalContent = styled.p`
  height: 70%;
  margin: 5px;
  width: 100%;
  letter-spacing: 0em;
  font-size: 1.3vw;
  font-family: EconomicBold;
`;

// 모달 푸터 style
const ModalFooter = styled.div`
  height: 10%;
  text-align: right;
`;

const ModalCloseButton = styled.button`
  color: #6a706e;
  border: 1px solid #6a706e;
  border-radius: 25px;
  font-size: 1.3vw;
  padding: 8px 20px;
  background-color: transparent;
`;

const DefaultModal = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <ModalButton type="button" onClick={() => openModal()}>
        {title}
      </ModalButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Default Modal"
        style={customStyles}
      >
        <ModalContainer>
          <ModaulHeader>모달 제목</ModaulHeader>
          <HR />
          <ModalContent>모달 내용</ModalContent>
          <HR />
          <ModalFooter>
            <ModalCloseButton onClick={closeModal} outline>
              close
            </ModalCloseButton>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </div>
  );
};

DefaultModal.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DefaultModal;

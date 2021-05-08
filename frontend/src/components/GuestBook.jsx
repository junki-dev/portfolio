import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import '../assets/GuestBook.css';

const GuestBook = () => {
  const [testData, setTestData] = useState([
    {
      id: 0,
      name: '김준기',
      content: '대단해요.',
      isOpen: false,
    },
    {
      id: 1,
      name: '황혜진',
      content: '엄청나요.',
      isOpen: false,
    },
    {
      id: 2,
      name: '송성현',
      content: '대단해요.',
      isOpen: false,
    },
  ]);

  const handleIsOpen = event => {
    const tempArray = [...testData]; // state 변경을 위한 임시 배열 데이터
    const eventId = parseInt(event.target.id, 10); // event id를 number로 변경

    tempArray.forEach(element => {
      if (element.id === eventId) {
        element.isOpen = !element.isOpen;
      }
    });
    setTestData(tempArray);
  };

  return (
    <div className="guest-boot-container">
      {testData.map(item => {
        return (
          <div className="guest-boot-content">
            <Button
              id={item.id}
              onClick={event => handleIsOpen(event)}
              aria-controls="example-collapse-text"
              aria-expanded={item.isOpen}
            >
              {item.name}
            </Button>
            <Collapse in={item.isOpen}>
              <div id="example-collapse-text">{item.content}</div>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};

export default GuestBook;

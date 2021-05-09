import React, { useState } from 'react';

import GuestBook from './GuestBook';

import '../assets/Experience.css';

const Experience = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const updateName = event => {
    setName(event.target.value);
  };

  const updateContent = event => {
    setContent(event.target.value);
  };

  return (
    <div className="experience-section" id="experience">
      <p className="experience-title">Experience</p>
      <hr className="experience-hr" />
      <div className="guestbook">
        <input
          className="guestbook-name"
          type="input"
          value={name}
          onChange={updateName}
          placeholder="방문자"
        />
        <hr />
        <textarea
          className="guestbook-content"
          type="input"
          value={content}
          onChange={updateContent}
          cols="15"
          placeholder="내용"
        />
        <input type="submit" value="저장" />
      </div>
      <div className="arrow">
        <span />
        <span />
        <span />
      </div>
      <GuestBook />
    </div>
  );
};

export default Experience;

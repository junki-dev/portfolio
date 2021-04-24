import React from 'react';

import '../assets/Career.css';
import career from './MyCareer';

const Career = () => {
  return (
    <div className="career-section" id="career">
      <p className="career-title">Career</p>
      <hr className="career-hr" />
      <table className="career-content">
        <thead>
          <tr>
            <th>기간</th>
            <th>프로젝트명</th>
            <th>역할</th>
          </tr>
        </thead>
        <tbody>
          {career.map(item => {
            return (
              <tr>
                <td className="career-content-date">{item.date}</td>
                <td className="career-content-project">{item.project}</td>
                <td className="career-content-role">{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Career;

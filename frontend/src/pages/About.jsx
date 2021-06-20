import React from 'react';
// import axios from 'axios';

import Sidebar from '../components/Sidebar';

// import Career from '../components/Career';
// import WordCloud from '../components/WordCloud';
// import Experience from '../components/Experience';
// import Contact from '../components/Contact';

import '../assets/Home.css';

const About = () => {
  /** axois 예제 */
  // const [userName, setUserName] = useState();

  // const fetchUserName = async () => {
  //   console.log(`===========================`);
  //   const url = 'http://localhost:4500/';
  //   axios
  //     .get(url)
  //     .then(function (response) {
  //       setUserName(response.data.userName);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(`실패 + ${error}`);
  //     });
  // };

  return (
    <div className="home">
      {/* <p>--------------------------</p>
      {userName}
      <input type="submit" onClick={fetchUserName} value="get" />
      <p>--------------------------</p> */}
      <Sidebar />
      <span>about 페이지입니다.</span>
      {/* <Career />
      <WordCloud />
      <Experience />
      <Contact /> */}
    </div>
  );
};

export default About;

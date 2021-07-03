import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import BodyHeader from '../components/BodyHeader';
import HR from '../components/HR';
// import Career from '../components/Career';
// import WordCloud from '../components/WordCloud';
// import Experience from '../components/Experience';
// import Contact from '../components/Contact';

const Body = styled.div`
  margin: 5%;
  width: 60%;
`;

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
      <Body>
        <BodyHeader
          title="I AM KIM JUNKI"
          subTitle="Blockchain Developer"
          subContnet="Also Web, Backend, Frontend, Infro..."
        />
        <HR />
      </Body>
      {/* <Career />
      <WordCloud />
      <Experience />
      <Contact /> */}
    </div>
  );
};

export default About;

import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import myPicHello from '../assets/images/hello.png';


const About = () => (
  <div>
    <h1> About </h1>
    <div className="myPicHello">
      <img src={myPicHello}></img>
    </div>
    <p>
      Hi! I am Charmaine, born and raised in Sunny Singapore,
      I moved to Vancouver in 2010 to pursue my education in Economics,
      It was then where I discovered my love for data, and during my stint
      working for a financial institution was when I discovered my love for code.
      I love helping people and delving into complicated problems and breaking them down into
      smaller(bite-sized) bits to solve them. I have recently moved to Victoria, BC and am looking
      for opportunities especially if it involves Node.js.
    </p>
    <SocialIcon url="https://www.linkedin.com/in/charmaine-tham" /> &nbsp;
    <SocialIcon url="https://github.com/charmainetham" color="orange"/> &nbsp;
    <SocialIcon url="mailto:charmainetham@live.com" network="email" color="pink"/>
  </div>
)


export default About
import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../assets/images/Charmainesphotom.jpg';
;
const Home = () => (
  <div>
    <span className='anim-typewriter'>Hi. I am Charmaine.</span>
    <div className='homecontainer'>
      <div className = 'leftimagehome'>
        <img src={myPic}/>
      </div>
      <div className='rightnavhome'>
        <ul>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/projects'>PROJECTS</Link></li>
            <li><Link to='/resume'>RESUME</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Home;
import React from 'react';
import '../Styles/week-one.css'; // Importing CSS file for styling
import img7 from '../Images/img7.png'; // Importing images
import img8 from '../Images/img8.png';
import img9 from '../Images/img9.png';
import img10 from '../Images/img10.png';
import img11 from '../Images/img11.png';
import img12 from '../Images/img12.png';
import img13 from '../Images/img13.png';
import img14 from '../Images/img14.png';
import cloud1 from '../Images/cloud1.png';
import cloud2 from '../Images/cloud2.png';
import cloud3 from '../Images/cloud3.png';
import cloud4 from '../Images/cloud4.png';
import cloud5 from '../Images/cloud5.png';

// Week1 component
const Week1 = () => {
  return (
    <div className='week1-main'>
      {/* Header section */}
      <div className='week1'>
        <img src={img9} alt='img9' className='img9' />
        <div className='text'>Week 1</div>
      </div>
      {/* Main content section */}
      <div className='content'>
        {/* Section one */}
        <div className='one'>
          <h1>Elements of Story Writing</h1>
        </div>
        {/* Section two */}
        <div className='two'>
          <p>
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </p>
        </div>
        {/* Section three */}
        <div className='three'>
          <div className='text'>
            There are <span>five</span> elements which make the foundation for
            story writing. An element is an essential part of something and
            every fiction story has the same key elements:
          </div>
          <img className='img7' src={img7} alt='img7' />
        </div>
        {/* Section four */}
        <div className='four'>
          <ElementCloud img={cloud1} text='SETTING' />
          <ElementCloud img={cloud2} text='CHARACTERS' />
          <ElementCloud img={cloud3} text='PLOT' />
          <ElementCloud img={cloud4} text='PROBLEM OR CONFLICT' />
          <ElementCloud img={cloud5} text='RESOLUTION' />
        </div>
        {/* Section five */}
        <div className='five'>
          You must be familiar with some of these. If not, do not worry! we will
          cover all these elements as we go along.
        </div>
        {/* Section six */}
        <div className='six'>
          <div className='text'>
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories.
            <br />
            The setting is an important element of every fiction story.
          </div>
          <img src={img8} alt='img8' className='image' />
        </div>
      </div>
      {/* Navigation section */}
      <div className='nav'>
        <NavigationButton img={img10} />
        <div className='nav-main'>
          <img src={img13} alt='img13' />
          <img src={img14} alt='img14' />
          <a href='/week-two'>
            <img src={img12} alt='img12' />
          </a>
        </div>
        <NavigationButton img={img11} />
      </div>
    </div>
  );
};

// ElementCloud component for displaying each story element
const ElementCloud = ({ img, text }) => (
  <div>
    <img className='cloud' src={img} alt={text} />
    <p>{text}</p>
  </div>
);

// NavigationButton component for navigation buttons
const NavigationButton = ({ img }) => <img src={img} alt='navigation-button' />;

export default Week1; // Exporting Week1 component

import React from 'react';
import '../Styles/week-two.css'; // Importing CSS file for styling
import img10 from '../Images/img10.png'; // Importing images
import img11 from '../Images/img11.png';
import img12 from '../Images/img12.png';
import img13 from '../Images/img13.png';
import img19 from '../Images/img19.png';
import img15 from '../Images/img15.png';
import img16 from '../Images/img16.png';
import img17 from '../Images/img17.png';
import img18 from '../Images/img18.png';

// Week2 component
const Week2 = () => {
  return (
    <div className='week2-main'>
      {/* Main content section */}
      <div className='content'>
        {/* Section one */}
        <div className='one2'>
          Can you figure out the definition of setting from the following
          examples?
        </div>
        {/* Section two */}
        <div className='two2'>(take a minute to think about this)</div>
        {/* Section three */}
        <div className='three2'>
          <ExampleBox src={img15} text='Sunny day at a beach' />
          <ExampleBox
            src={img16}
            text='A cold rainy night in a haunted house in October'
          />
        </div>
        {/* Section four */}
        <div className='four2'>
          <div>
            So, what do you think the definition of setting is?
            <div className='question'>
              Any guesses?
              <span className='answer'>
                Setting is the time and place of a story.
              </span>
              <span className='hint'>
                Hint:
                <img src={img17} alt='time' />
                <img src={img18} alt='place' />
              </span>
            </div>
          </div>
        </div>
        {/* Section five */}
        <div className='five2'>
          <p>
            Setting is the time <img className='icon' src={img18} alt='time' />{' '}
            and place <img className='icon' src={img17} alt='place' /> of a
            story. It often answers the questions: when? and where?
          </p>
        </div>
        {/* Section six */}
        <div className='six2'>
          The time of the story could be in the past, future, day, night, summer
          or winter. A story may take place in a school, a mall, a desert, an
          airplane or in a variety of other places.
        </div>
      </div>
      {/* Navigation section */}
      <div className='nav'>
        <img src={img10} alt='img10' />
        <div className='nav-main'>
          <a href='/'>
            <img src={img13} alt='img13' />
          </a>
          <img src={img19} alt='img19' />
          <img src={img12} alt='img12' />
        </div>
        <img src={img11} alt='img11' />
      </div>
    </div>
  );
};

// ExampleBox component for displaying example boxes
const ExampleBox = ({ src, text }) => (
  <div className='box'>
    <div className='frame'>
      <img src={src} alt='' />
    </div>
    <div className='text'>{text}</div>
  </div>
);

export default Week2; // Exporting Week2 component

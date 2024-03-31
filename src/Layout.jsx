import React from 'react';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import img5 from './Images/img5.png';
import img6 from './Images/img6.png';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className='page'>
      <img className='img1' src={img1} alt='img1' />
      <img className='img2' src={img2} alt='img2' />
      <img className='img3' src={img3} alt='img3' />
      <img className='img4' src={img4} alt='img4' />
      <img className='img5' src={img5} alt='img5' />
      <img className='img6' src={img6} alt='img6' />
      <img
        className='logo'
        src='https://s3-alpha-sig.figma.com/img/3a85/90a2/cec8fa99d0474355d797e1561651c8d4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iKNqV4b8woAggRT9AVI5z8G3pgaq3gB2t4ZE430aT2EE3aRHaSXj4Wyyme8g-UgGJxnUgu-RgDhv9fDaT~oPz2NVUVoKEXAVUVDuiJoVxXWF8rWJasTLInYNVSOlV0cKrrnd9tUtrow1WG5XQuhWLmUk33S-Hdq5OAgxwmfd5LyCJym-Qv1esSRUfJqtA3Mb9yd82tE~nrpyuJ~5VZnWGywDz-4KefDbZc3bmzGqrEkMUnQPxu-1I~JLL0pU14YJfTahCLozvH1XigsYN9j2ahDVrRC49vsROy~YbUQtWBWlkczyAmHilrvuVCPTLSbFl2IIg44bHaoOdqkFuhNPOw__'
        alt='logo'
      />
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

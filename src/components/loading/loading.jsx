import React from 'react';
import './style.less';

const Loading = () => {
  return (
    <div className='loading-wrapper'>
      <div className="loading-container">
        <div className="disc1"></div>
        <div className="disc2"></div>
        <div className="disc3"></div>
        <div className="landscape1"></div>
        <div className="landscape2"></div>
        <div className="landscape3"></div>
        <div className="landscape4"></div>
        <div className="tree1"></div>
        <div className="tree2"></div>
        <div className="tree3"></div>
        <div className="tree4"></div>
        <div className="tree5"></div>
        <div className="tree6"></div>
        <div className="star s1" id="animate"></div>
        <div className="star s2"></div>
        <div className="star s3"></div>
        <div className="star s4"></div>
        <div className="star s5"></div>
        <div className="star s6" id="animate"></div>
        <div className="star s7"></div>
        <div className="star s8"></div>
        <div className="star s9" id="animate"></div>
        <div className="star s10"></div>
        <div className="shootingstar"></div>
        <div className="shootingstar2"></div>
      </div>
      <h5>loading....</h5>
    </div>
  );
};

export default Loading;

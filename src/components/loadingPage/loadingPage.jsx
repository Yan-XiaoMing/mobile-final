import React from 'react';
import './style.less';

const LoadingPage = () => {
  return (
    <div className='loading-wrapper'>
      <div className="loading-item">
        <hr/>
        <hr/>
        <hr/>
        <hr/>
      </div>
      <div className="loading-title">
        加载中....
      </div>
    </div>
  );
};

export default LoadingPage;

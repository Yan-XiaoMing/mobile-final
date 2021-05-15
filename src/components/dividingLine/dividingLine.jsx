import React from 'react';
import './style.less';

const DividingLine = ({className = ''}) => {
  return (
    <div className={className + ' dividing-line-horizontal dividing-line'}/>
  );
};

export default DividingLine;

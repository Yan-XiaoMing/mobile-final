import React, {Component} from 'react';
import {MenuOutlined} from '@ant-design/icons'
import './style.less';

class Header extends Component {
  render() {
    return (
      <header className={'header-wrapper'}>
        <div className='header-icon'>
          <img/>
        </div>
        <div className=''>
          浙江东都建筑设计研究院有限公司
        </div>
        <div className='header-router'>

        </div>
      </header>
    );
  }
}

export default Header;

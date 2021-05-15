import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {randomSearchPlaceholder} from '../../utils/utils';
import {Link} from 'react-router-dom';
import addIcon from '../../assets/img/add.png';
import './style.less';

class Header extends Component {
  render() {
    console.log(this.props.match)
    return (
      <header className={this.props.match.pathname === '/mine'?'header-mine':''}>
        <div className='header-wrapper'>
          <div className='header-h'>Q&A</div>
          <div className='header-search'>
            <Link to='/search' style={{textDecoration: 'none'}}>
              <div className='header-search-link'>
                <span className={`iconfont iconfangdajingsousuo header-search-icon-size`}/>
                <span className='header-search-title'>{randomSearchPlaceholder()}</span>
              </div>
            </Link>
          </div>
          {this.props.match.pathname === '/mine' && (
            <div className='header-add'>
              <span className={`iconfont iconyejian header-icon-size`}/>
            </div>
          )}
          {this.props.match.pathname !== '/mine' && (
            <div className='header-add'>
              <img src={addIcon} alt='创建'/>
            </div>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  match: PropTypes.object.isRequired
};
Header.defaultPropTypes = {
  match: {pathname:'/'}
};

export default Header;

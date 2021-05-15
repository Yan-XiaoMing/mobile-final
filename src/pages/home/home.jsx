import React, {Component} from 'react';
import HomeList from '../../components/HomeList/homeList';
import BScroll from '@better-scroll/core';
import {Link} from 'react-router-dom';
import './style.less';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const hc = document.querySelector('.home-container');
    const bs = new BScroll(hc);
  }

  render() {
    return (
      <div className='home-container'>
        <div className='homeList'>
          {/*<Link to={`/homeList/${id}`}>*/}
          {/*  <HomeList/>*/}
          {/*</Link>*/}
          <HomeList/>
          <HomeList/>
          <HomeList/>
          <HomeList/>
          <HomeList/>
        </div>
      </div>
    );
  }
}

export default Home;

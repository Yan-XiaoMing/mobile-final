import React, {Component} from 'react';
import './style.less';

class HomeList extends Component {
  render() {
    // const {img = null} = this.props.list
    return (
      <div className='home-list-wrapper'>
        <div className='home-list-container'>
          <h1>iPhone12影像体验报告</h1>
          <div className='home-list-content'>
            <div className='home-list-content-left'>
              <div className='home-list-user'>
                <div className='home-list-user-icon'/>
                <span className='home-list-user-name'>我是大聪明</span>
              </div>
              <div className='home-list-detail'>
                <p>
                  想要高端的，学stata，不会的找个会的教你，估计两小时就可以处理简单的时间近日，钟南山公开表示称，新冠还有很多主要问题没有解决，新冠疫情发生的规律还没有摸清，溯源尚未完成，
                </p>
              </div>
            </div>
            <div className='home-list-content-right'>
              <div className='home-list-content-img'>
              </div>
            </div>
            {/*{img !== null && (*/}
            {/*  <div/>*/}
            {/*)}*/}
          </div>
          <div className='home-list-footer'>
            <span className='home-list-footer-num'>2020</span><span className='home-list-footer-unit'>赞</span>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <span className='home-list-footer-num'>132</span><span className='home-list-footer-unit'>评论</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeList;

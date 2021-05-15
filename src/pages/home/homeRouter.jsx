import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './home';

const HomeDetail = React.lazy(()=>import('../homeDetail/homeDetail'))

class HomeRouter extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Route path='/' component={Home}/>
        <Route path='/homeList/:id' component={HomeDetail}/>
      </div>
    );
  }
}

export default HomeRouter;

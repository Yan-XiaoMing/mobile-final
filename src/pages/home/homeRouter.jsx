import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './home';


class HomeRouter extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Route path='/' component={Home}/>
      </div>
    );
  }
}

export default HomeRouter;

import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Loading from './components/loading/loading';
import './reset.css';

const login  = React.lazy(()=>import('./pages/login/login'))
const index  = React.lazy(()=>import('./pages/index/index'))
const search = React.lazy(()=>import('./pages/search/search'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path='/login' component={login}/>
            <Route path='/search' component={search}/>
            <Route path='/' component={index}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

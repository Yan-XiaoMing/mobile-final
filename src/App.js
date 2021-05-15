import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Loading from './components/loading/loading';
import './reset.css';

const index  = React.lazy(()=>import('./pages/index/index'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path='/' component={index}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

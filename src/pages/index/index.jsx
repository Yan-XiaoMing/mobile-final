import React, {Component, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer';
import LoadingPage from '../../components/loadingPage/loadingPage';
import './style.less';

const homeRouter = React.lazy(() => import('../home/homeRouter'));
// const mine = React.lazy(() => import('../mine/mine'));
// const message = React.lazy(() => import('../message/message'));
// const find = React.lazy(() => import('../find/find'));

class Index extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  handlePushRoute = (route) => {
    this.props.history.push(route);
  };

  render() {
    const match = this.props.location;
    return (
      <div className='index-container'>
        <Header match={match} />
        <main>
          <Suspense fallback={<LoadingPage/>}>
            <Switch>
              <Route path='/' component={homeRouter}/>
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Index;

import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppLayout from './components/layouts/AppLayout';

const defaultApp = (props) => {
  return (<div>{props.children}</div>)
}

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={defaultApp}>
          {/* <Route path='login' component> */}
            <Route path="home" component={AppLayout}/>
            <Route path="contact" component={AppLayout}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

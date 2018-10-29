import React, { Component } from 'react';
import {IndexRoute, Router, Route, browserHistory } from 'react-router';
import AppLayout from './components/layouts/AppLayout';
import { Gallery } from './components/layouts/Gallery';
import { AboutUs } from './components/layouts/AboutUs';
import { ContactUs } from './components/layouts/ContactUs';
import { Courses } from './components/layouts/Courses';

const Banner = (props)=>{
  return (
    <img alt="banner" className='img-fluid' style={{ width: '100%' }} src='../../assets/img/banner.jpg' />
  )
}

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={AppLayout}>
            <IndexRoute component={Banner} />
            <Route path="home" component={Banner} />
            <Route path="aboutus" component={AboutUs} />
            <Route path="contactus" component={ContactUs} />
            <Route path="gallery" component={Gallery} />
            <Route path="courses" component={Courses} />
          </Route>
        </Router>
    );
  }
}

export default App;

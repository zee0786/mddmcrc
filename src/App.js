import React, { Component } from 'react';
import {IndexRoute, Router, Route, browserHistory } from 'react-router';
import AppLayout from './components/layouts/AppLayout';

const ContactUs = (props) => {
  return (<h1>Contact Us</h1>)
};
const AboutUs = ContactUs;
const Gallery = AboutUs;

const Banner = (props)=>{
  return (
    <img className='img-fluid' style={{ width: '100%' }} src='../../assets/img/banner.jpg' />
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
          </Route>
        </Router>
    );
  }
}

export default App;

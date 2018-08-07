import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div style={{background:'#2E1532'}} className='col-sm-6'>
                <a style={{color:'wheat'}} href="">Staff Login</a>|
                <a style={{color:'wheat'}} href="">Student Login</a>
                
            </div >
        )
    }
}
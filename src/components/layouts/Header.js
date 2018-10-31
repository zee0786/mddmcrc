import React, { Component } from 'react';
import AppBar from '@material-ui/core';
import SearchBar from '../composite/SearchBar';

export default class Header extends Component {
    render() {
        return (
            <header className={`row ${this.props.wrapperClass}`} style={{ background: '#4A234F',padding:'20px 0' }}>
                <div className='col-sm-4 col-md-2 text-center'>
                    <a href="JavaScript:void(0);">
                        <img alt="logo" style={{ width: '100px' }} src="../../assets/img/logo.png" />
                    </a>
                </div>
                <div className='col-sm-6 col-md-10 text-center'>
                    <h1 style={{ color: 'white' }}>MDD Medical College &amp; Research Center</h1>
                </div>
            </header>
        )
    }
}
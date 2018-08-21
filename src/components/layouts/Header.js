import React, { Component } from 'react';
import AppBar from '@material-ui/core';
import SearchBar from '../composite/SearchBar';

export default class Header extends Component{
    render(){
        return (
            <header className={`row ${this.props.wrapperClass}`} style={{background:'#4A234F'}}>
                <div className='col-sm-4 col-md-2 text-center'>
                    <img style={{width:'100px'}} src="../../assets/img/logo.png" />
                </div>
                <div className='col-sm-6 col-md-3'>
                    <h3 style={{color:'white'}}>MDD Medical College &amp; Research Center</h3>
                </div>
                <SearchBar />
                
               {/* <AppBar  /> */}
            </header>
        )
    }
}
import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return (
            <footer style={{
                position:'fixed',
                bottom:0,
                backgroundColor:"#4A234F",
                color:'wheat',
                width:'100%'
                }} className="row text-center">
            MDD Medical College and Research Center
            </footer>
        )
    }
}
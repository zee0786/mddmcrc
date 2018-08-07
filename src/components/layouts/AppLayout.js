import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from './Header';
import Footer from './Footer';

export default class AppLayout extends Component {
    constructor(props){
        super(props);
        this.onchangetab = this.onchangetab.bind(this);
        this.state={value:0}
    }
    onchangetab(event,value){
    this.setState({value})
    }
    render() {
        return (
            <div className='container'>
                <Header />
                <Tabs value={this.state.value} onChange={this.onchangetab} >
                    <Tab label='home'>
                        
                    </Tab>
                    <Tab label='about'>
                      
                    </Tab>
                    <Tab label='contact us'>
                      
                    </Tab>
                </Tabs>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
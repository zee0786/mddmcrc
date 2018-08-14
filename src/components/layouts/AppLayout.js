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
                <div className='row'>
                    <Tabs value={this.state.value} onChange={this.onchangetab} >
                        {['home','about','contact us'].map(
                            (menuItem)=>
                            <Tab
                            style={{fontSize:'2em'}}
                            label={menuItem}>
                            </Tab>
                            )
                        }
                    </Tabs>
                </div>
                <img class='img-fluid' style={{width:'100%'}} src='../../assets/img/banner.jpg' />
                
                <Footer />
            </div>
        )
    } 
}
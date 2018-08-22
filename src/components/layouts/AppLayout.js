import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { browserHistory as history } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default class AppLayout extends Component {
    constructor(props) {
        super(props);
        this.onchangetab = this.onchangetab.bind(this);
        this.state = { value: 0 }
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(path) {
        history.push('/' + path)
    }

    onchangetab(event, value) {
        this.setState({ value })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Header wrapperClass="" />
                    <div className="row">
                        <Tabs value={this.state.value} className="tabWrapper" onChange={this.onchangetab} fullWidth centered >
                            {
                                [{ label: 'home', path: 'home' },
                                { label: 'about us', path: 'aboutus' },
                                { label: 'contact us', path: 'contactus' },
                                { label: 'gallery', path: 'gallery' }
                                ].map(
                                    (menuItem) =>
                                        <Tab
                                            style={{ backgroundColor: '#d4ccd6' }}
                                            label={menuItem.label}
                                            onClick={() => this.tabClick(menuItem.path)}
                                            key={menuItem.path}
                                        >
                                        </Tab>
                                )
                            }
                        </Tabs>
                    </div>
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
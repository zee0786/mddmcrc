import React, { Component } from 'react';
import CommentDialogue from './CommentDialogue';
export default class SearchBar extends Component {
    render() {
        return (
            <div style={{ background: '#2E1532' }} className="col-sm-6">
                <div className="col-sm-6 row">
                    <a style={{ color: 'wheat' }} href="">Staff Login</a>|
                <a style={{ color: 'wheat' }} href="">Student Login</a>
                </div>
                <div className="col-sm-6 row">
                    <CommentDialogue btnText="SEARCH" />
                </div>
            </div >
        )
    }
}
import React, { Component } from 'react';
import TextInput from '../core/TextInput';
import AppButton from '../core/AppButton';


const colorTextBox = 'wheat'
export default class CommentDialogue extends Component {
    render() {
        return (
            <div style={this.props.wrapperStyle} className={this.props.wrapperClass}>
                <TextInput style={{
                    border: `1px solid ${colorTextBox}`,
                    borderRadius: '5px',
                    caretColor: colorTextBox,
                    color: colorTextBox
                }}
                />
                <AppButton variant='outlined' color='primary'>{this.props.btnText}</AppButton>
            </div >
        )
    }
}
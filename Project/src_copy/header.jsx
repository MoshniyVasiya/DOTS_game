import React from 'react';
import { GithubPicker } from 'react-color';

export default class Header extends React.Component {
    constructor() {
        super();

        this.state = {

        }
      

    }

    render() {
        
        
        
        console.log(<GithubPicker/>);
        return (
            <div id='header'>
                <div >
                    <span id="span">Player 1 <div id="cube" style={{ background: this.props.colorP1, boxShadow: `0 0 20px ${this.props.colorP1}` }} /></span>
                    <GithubPicker 
                        color={this.props.colorP1}
                        onChangeComplete={this.props.handleChangeCompleteP1}
                    />
                </div>

                <div >
                    <span id="span">Player 2 <div id="cube" style={{ background: this.props.colorP2, boxShadow: `0 0 20px ${this.props.colorP2}` }} /></span>
                    <GithubPicker
                        color={this.props.colorP2}
                        onChangeComplete={this.props.handleChangeCompleteP2}
                    />
                </div>
            </div>
        )
    }
}
import React from 'react';
import Button from './button';
import Square from './square';


export default class Battlefield extends React.Component {  
    constructor(){  
        super();

        this.state = {  
            dots: [
                {key: 1},
                {key: 2},
                {key: 3},
                {key: 4},
                {key: 5},
                {key: 6},
                {key: 7},
                {key: 8},
                {key: 9},
                {key: 10},
                {key: 11},
                {key: 12},
                {key: 13},
                {key: 14},
                {key: 15},
                {key: 16},
            ],
        }
    }


    render(){   
        return (    
            <div id="battlefield"> 
                             
                <Square ><Button index={this.state.dots[0].key}/></Square>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        )
    }
}
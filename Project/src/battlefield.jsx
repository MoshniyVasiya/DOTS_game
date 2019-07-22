import React from 'react';
import Button from './button';



function Horizontal() { 
return( 
    <div id="horizontal">
        
    </div>
)
}

function Vertical() {   
    return( 
        <div id="vertical"></div>
    )
}

export default class Battlefield extends React.Component {  
    constructor(){  
        super();


    }


    render(){   
        return (    
            <div id="battlefield"> 
                <Button />  
                <div id="horizontals">
                <Horizontal />
                <Horizontal />
                <Horizontal />
                <Horizontal />
                <Horizontal />

                <Horizontal />
                <Horizontal />
                <Horizontal />
                <Horizontal />
                <Horizontal />

                <Horizontal />
                <Horizontal />
                <Horizontal />
                <Horizontal />
                </div>

                <div id="verticals">
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />

                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />

                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />
                
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />
                
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />
                <Vertical />

                
                </div>
               

            </div>
        )
    }
}
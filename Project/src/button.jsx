import React from 'react';
import Battlefield from './battlefield_copy';

export default class Button extends React.Component{    
constructor(){  
    super();


    this.state = {  
        
    }
    this.dotClick = this.dotClick.bind(this);
}

dotClick() { 

this.setState({ 
    clicked: 'yellow',
    
})
   console.log(this.props) 
}



    render() {
        let styles = {};
    if (this.state.clicked) {
      styles.backgroundColor = this.state.clicked; 
    }
   
        return( 
            <button  className="button" onClick={this.dotClick} style={styles} />
        )
    }
}
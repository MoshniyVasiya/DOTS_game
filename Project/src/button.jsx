import React from 'react';

export default class Button extends React.Component{    
constructor(){  
    super();


    this.state = {  
        
    }
    this.dotClick = this.dotClick.bind(this);
}

dotClick() { 
     
this.setState={ 
    clicked: 'yellow',
}
    
}



    render() {
        let styles = {};
    if (this.state.clicked) {
      styles.backgroundColor = this.state.clicked; 
    }
        return( 
            <button id="button" onClick={this.dotClick} style={styles} />
        )
    }
}
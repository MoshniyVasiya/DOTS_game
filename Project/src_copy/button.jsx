import React from 'react';
import Battlefield from './battlefield_copy';

export default (props) => {
    return (    
        <button
        onClick={props.onClick}
        disabled={props.disabled}
        className="dots"
        style={{ backgroundColor: props.color, top: props.top * 50, left: props.left * 50 }}>
    </button>
    )
}
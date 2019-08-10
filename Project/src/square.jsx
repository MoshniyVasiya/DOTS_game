import React from 'react';
import Button from './button';


export default function Square(props) {



  return (
    <div  id="square">
      <Button index={props.index}/>
    </div>
  )

}
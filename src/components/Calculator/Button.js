import React, { Component } from 'react';
import './Button.css';

const Button = ( props ) => {
    return(
        <div>
            <input 
            type='button' 
            className={ props.type == 'action' ? 'button action-button' : 'button input-button' }
            onClick={ props.handleClick }
            value={ props.label }
            />
            
        </div>
    )
}

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired
}
export default Button

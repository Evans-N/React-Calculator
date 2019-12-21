import React, { Component } from 'react';
import './DisplayRows.css'

const DisplayRows = ( props ) => {
        return (
            <div className='screen-inputs'>
                <input type='text' readOnly value={ props.value }/>
            </div>
        )
    }
DisplayRows.propTypes = {
  value: React.PropTypes.string.isRequired
}

export default DisplayRows
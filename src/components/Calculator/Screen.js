import React, { Component } from 'react';
import DisplayRows from './DisplayRows';

const Screen = ( props ) => {
    return (
    <div>
        <DisplayRows value={ props.inputs }/>
        <DisplayRows value={ props.outputs }/>
    </div>
    )
}

Screen.propTypes = {
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired
}

export default Screen

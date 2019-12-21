import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

export class Calculator extends Component {
    constructor(){
      super();  
      this.state = {
          inputs : '',
          outputs : ''
      }
      this.handleClick = this.handleClick.bind(this)
    }
    

    render() {
        return (
            <div className="calculator">
                <div className="title">
                    <h1>React Calculator</h1>
                </div>
                <Screen inputs ={ this.state.inputs } outputs={ this.state.outputs } />
                <div className="row-one">
                    <Button label={'1'} handleClick={this.handleClick} type='input'/>
                    <Button label={'2'} handleClick={this.handleClick} type='input'/>
                    <Button label={'3'} handleClick={this.handleClick} type='input'/>
                    <Button label={'4'} handleClick={this.handleClick} type='input'/>
                    <Button label={'-'} handleClick={this.handleClick} type='action'/>
                    <Button label={'+'} handleClick={this.handleClick} type='action'/>
                </div>
                <div className="row-two">
                    <Button label={'5'} handleClick={this.handleClick} type='input' />
                    <Button label={'6'} handleClick={this.handleClick} type='input' />
                    <Button label={'7'} handleClick={this.handleClick} type='input' />
                    <Button label={'8'} handleClick={this.handleClick} type='input' />
                    <Button label={'*'} handleClick={this.handleClick} type='action' />
                    <Button label={'/'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="row-three">
                    <Button label={'9'} handleClick={this.handleClick} type='input' />
                    <Button label={'.'} handleClick={this.handleClick} type='input' />
                    <Button label={'0'} handleClick={this.handleClick} type='input' />
                    <Button label={'Clr'} handleClick={this.handleClick} type='action' />
                    <Button label={'='} handleClick={this.handleClick} type='action' />
                </div>
            </div>
        )
    }
}

export default Calculator

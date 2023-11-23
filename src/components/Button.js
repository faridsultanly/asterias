import React, { Component } from 'react'

export class Button extends Component {
  render() {
    const {text, svg=null, className} = this.props;
    return (
        <button className={className}>
            {svg}
            {text}
        </button> 
    )
  }
}

export default Button
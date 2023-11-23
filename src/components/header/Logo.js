import React, { Component } from 'react'
import logo from '../../img/Logo.png'
export class Logo extends Component {
  render() {
    return (
        <div className="logo">
            <img src={logo} />
        </div>
    )
  }
}

export default Logo
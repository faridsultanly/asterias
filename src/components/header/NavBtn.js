import React, { Component } from 'react'
import OptionSvg from '../svgs/OptionSvg'

export class NavBtn extends Component {
  render() {
    const {title, options=null} = this.props
    return (
        <li>{title} { options?<OptionSvg />:null}</li>
    )
  }
}

export default NavBtn
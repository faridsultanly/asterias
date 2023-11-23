import React, { Component } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import HeaderTextbox from './HeaderTextbox'
import Img from '../Img'
import headerImg from "../../img/header_img.png"
export class Header extends Component {
  render() {
    return (
        <header>
            <div className="container">
                <div className="header_head_container">
                   <Logo />
                    <Nav />
                </div>
            </div>
            <div className="container">
                <div className="header_center_container">
                    <HeaderTextbox
                        title="Training & Development"
                        description="Quod rerum doloremque. Est voluptatibus voluptatum consequatur. Dolorem maiores quo necessitatibus."
                    />
                    <Img className={"header_center_img"} url={headerImg} />
                </div>
            </div>
        </header>
    )
  }
}

export default Header
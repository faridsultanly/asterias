import React, { Component } from 'react'
import Button from '../Button';
import FacebookSvg from '../svgs/FacebookSvg';
import TwitterSvg from '../svgs/TwitterSvg';
import InstagramSvg from '../svgs/InstagramSvg';

export class HeaderTextbox extends Component {
  render() {
    const {title, descroption} = this.props;
    return (
        <div className="center_text ">
            <h2>{title}</h2>
            <p>{descroption}</p>

            <div className="header_center_btn">
                <Button text="Xidmətlərimiz" className={'first_btn'} />
                <Button text="Təlimlərimiz" className={'second_btn'} />
            </div>
            
            <div className="header_svg">
                <FacebookSvg />
                <TwitterSvg />
                <InstagramSvg />
            </div>
        </div>
    )
  }
}

export default HeaderTextbox
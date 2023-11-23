import React, { Component } from 'react'
import NavBtn from './NavBtn';
import Button from '../Button';
import UserSvg from '../svgs/UserSvg';
import ChangeLang from './ChangeLang';

export class Nav extends Component {
    state={
        navs:[
            {
                nav: 'HAQQIMIZDA',
                options: []
            },
            {
                nav:"TƏLİMLƏR"
            },
            {
                nav: 'BLOG',
                options: []
            },
            {
                nav:'XƏBƏRLƏR'
            },
            {
                nav:'ƏLAQƏ'
            }
        ]
    }
  render() {
    const {navs} = this.state;
    return (
        <div className="header_nav">
            <nav className="header_head_nav">
                <ul>
                    {
                        navs?.map((item ,i)=>{
                            return(
                                <NavBtn key={i} title={item?.nav} options={item?.options} />
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="nav_btn">
                <Button svg={<UserSvg />} text="Daxil ol" className={'nav_btn'} />
                <ChangeLang />
            </div>
        </div>
    )
  }
}

export default Nav
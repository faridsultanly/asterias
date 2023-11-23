import React, { Component } from 'react'

export class MainCard extends Component {
  render() {
    const {img, title, text='', userName, userImage="", imgTitle='', svg} = this.props;
    return (
        <div className="grid_card">
            <div className="blog_grid_inner_img_cont">
                <img src={img} alt="" />
                {
                    imgTitle != ''?
                    <span className="grid_img_title">{imgTitle}</span>:null
                }
                

            </div>
            <div className="grid_text">
                <h3>{title}</h3>
                <p>{text}</p>
                
                <div className="grid_card_user views">
                    {
                        userImage!= ''?
                        <img src={userImage} alt="" />:null
                    }
                    {svg}
                    <p className="grid_views_numbers">{userName}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default MainCard
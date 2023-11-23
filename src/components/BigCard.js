import React, { Component } from 'react'

export class BigCard extends Component {
  render() {
    return (
        <div className="blog_grid_img_cont">
            <img src="./img/blog_grid.png" alt="" />
            <div className="img_main_cont">
                <span className="grid_img_title">Education</span>
                <h2 className="grid_img_text">Sint numquam nostrum odio et commodi qui quos sit</h2>
                <div className="grid_card_user ">
                    <img src="./img/Frame 72.png" alt="" />
                    <p className="grid_views_numbers">2123 dəfə oxundu</p>
                </div>
            </div>
        </div>
    )
  }
}

export default BigCard
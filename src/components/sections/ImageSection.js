import React, { Component } from 'react'

export class ImageSection extends Component {
  render() {
    return (
        <section>
            <div className="container">
            <div className="img">
                <img src="./img/Bitmap.png" alt="" />
                <img src="./img/Bitmap (1).png" alt="" />
                <img src="./img/Bitmap (2).png" alt="" />
                <img src="./img/Bitmap (3).png" alt="" />
                <img src="./img/Bitmap (4).png" alt="" />
            </div>
            </div>
        </section> 
    )
  }
}

export default ImageSection
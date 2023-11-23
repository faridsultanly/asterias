import React, { Component } from 'react'
import Img from './Img'

export class ServiceCard extends Component {
  render() {
    const{url, title, text}=this.props
    return (
        <div className="service_block">
            <div className="service_start_block green">
                <Img className='service_start_block_img' url={url}  />
                <div className="service_start_block_text">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default ServiceCard
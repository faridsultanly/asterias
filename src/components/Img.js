import React, { Component } from 'react'

export class Img extends Component {
  render() {
    const {className, url, h5Text=''} = this.props;
    return (
        <div className={className}>
            <img src={url} alt="" />
            {
              h5Text != ''?
              <h5>{h5Text}</h5>:null
            }
        </div>
    )
  }
}

export default Img
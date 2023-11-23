import React, { Component } from 'react'
import Img from '../Img'
import image from '../../img/Frame 23.png'
import Button from '../Button'
import axios from 'axios'
export class AboutSection extends Component {
    state={
        aboutData: ''
    }
    componentDidMount(){
        axios.get('./about.json')
        .then(resp=>{
            this.setState({aboutData: resp.data})
        })
    }
  render() {
    const {aboutData} = this.state;
    return (
        <section>
            <div className="container">
                <div className="about_us">
                    <Img url={image} className="about_img" />
                   
                    <div className="about_text">
                        <h4>{aboutData.subTitle}</h4>
                        <h2>{aboutData.title}</h2>
                        <h3>{aboutData.text}</h3>
                        <p>{aboutData.description}</p>
                        <Button className={'btn'} text={aboutData.btnText} />
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default AboutSection
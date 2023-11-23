import React, { Component } from 'react'
import axios from 'axios'
export class ServicePackage extends Component {
    state={
        serviceData:""
    }
    componentDidMount(){
        axios.get("./ServicePackage.json")
        .then(resp=>{
            this.setState({serviceData:resp.data})
        })
    }
  render() {
    const{serviceData}=this.state;
    return (
        <section>
        <div className="container">
            <div className="service_packages">
                <div className="service_packages_img">
                    <img src={serviceData.img} alt="" />
                </div>
                <div className="service_packages_text">
                    <h4>{serviceData.title}</h4>
                    <h2>{serviceData.subtitle}</h2>
                    <h3>{serviceData.text}</h3>
                    <p>{serviceData.description}</p>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default ServicePackage
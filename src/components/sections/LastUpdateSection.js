import axios from 'axios'
import React, { Component } from 'react'
import MainCard from '../MainCard'
import DateSvg from '../svgs/DateSvg'

export class LastUpdateSection extends Component {
    state={
        lastupdates:[]
    }
    componentDidMount(){
        axios.get("./lastUpdate.json")
        .then(resp=>{
            this.setState({lastupdates: resp.data})
        })
    }
  render() {
    const{lastupdates}= this.state;
    return (
        <section>
        <div className="container">
            <div className="innovation">
                <h4 className="section_title">XƏBƏRLƏR</h4>
                <div className="innovation_header">
                    <h2>Ən son yeniliklər</h2>
                    <div>
                        <p>Bütün xəbərlər</p>
                    </div>
                    
                </div>
                <div className="grid_container">
                    {
                        lastupdates.map((data, i)=>{
                            return(
                                <MainCard key={i}
                                img={data.img} 
                                title={data.title}
                                userName={data.date}
                                svg={<DateSvg />}
                            /> 
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section> 
    )
  }
}

export default LastUpdateSection
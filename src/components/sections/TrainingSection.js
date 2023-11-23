import React, { Component } from 'react'
import MainCard from '../MainCard'
import axios from 'axios'
export class TrainingSection extends Component {
    state={
        traninings:[],
        search:''
    }

    componentDidMount(){
        axios.get('./trainingData.json')
        .then(resp=>{
            this.setState({traninings: resp.data})
        })
    }
  render() {
    const {traninings, search} = this.state;
    console.log(search)
    return (
        <section>
        <div>
            <div className="container">
                <div className="grid_main">
                    <div className="grid_header">
                        <div className="grid_header_text">
                            <h4>TƏLİMLƏR</h4>
                            <h2>Populyar təlimlər</h2>
                            <p>Qui eius et enim eos eum est et. Consectetur enim vero qui. Aut aut et veniam a. Non accusamus suscipit maiores rerum itaque id vel eos. Quis ipsam eveniet distinctio et nihil et id neque.</p>
                        </div>
                        <div className="grid_header_inp">
                            <input value={search} onChange={(e)=>this.setState({search:e.target.value})} type="text" placeholder="Təlimlər üzrə axtarış..." />
                            <button>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2945 10.7303L15.676 14.112C16.108 14.5439 16.108 15.2435 15.676 15.6759C15.4603 15.8922 15.1777 16 14.894 16C14.6108 16 14.3287 15.8922 14.1119 15.6759L10.7304 12.2942C9.58603 13.1182 8.22103 13.5678 6.78356 13.5678C4.97111 13.5678 3.26761 12.8611 1.98667 11.5803C0.705181 10.2984 0 8.59505 0 6.78335C0 4.97166 0.705734 3.2678 1.98667 1.98756C3.26761 0.705102 4.97166 0 6.78356 0C8.59602 0 10.3006 0.706761 11.5805 1.98756C12.8631 3.26891 13.5682 4.97221 13.5682 6.78335C13.5682 8.22121 13.1164 9.58717 12.2945 10.7303ZM2.21233 6.7828C2.21233 8.00332 2.68743 9.15194 3.55135 10.0158C4.4136 10.879 5.5618 11.3546 6.78356 11.3546C8.00532 11.3546 9.15242 10.8801 10.0163 10.0163C10.8808 9.15194 11.3559 8.00387 11.3559 6.78335C11.3559 5.56284 10.8802 4.41477 10.0163 3.55095C9.15297 2.68713 8.00477 2.21153 6.78356 2.21153C5.56236 2.21153 4.41471 2.68713 3.55135 3.55095C2.68743 4.41477 2.21233 5.56228 2.21233 6.7828Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid_container">
                        {
                            traninings.map((data, i)=>{
                                if(data?.title.toLowerCase().includes(search.toLowerCase())){
                                    return(
                                        <MainCard 
                                            key={i}
                                            img={data?.img}
                                            title={data?.title}
                                            text={data?.text}
                                            userName={data?.userName}
                                            userImage={data?.userImage}
                                        />
                                    )
                                }
                                
                            })
                        }
                    </div>
                    <div className="grid_end_btn">
                        <button className="btn">Bütün təlimlərə bax</button>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    )
  }
}

export default TrainingSection
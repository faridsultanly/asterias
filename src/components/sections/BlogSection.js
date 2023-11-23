import React, { Component } from 'react'
import BigCard from '../BigCard'
import MainCard from '../MainCard'
import axios from 'axios'
export class BlogSection extends Component {
    state={
        blogs:[]
    }

    componentDidMount(){
        axios.get("./blog.json")
        .then(resp=>{
            this.setState({blogs: resp.data})
        })
    }
  render() {
    const{blogs}=this.state;
    console.log(blogs);
    return (
        <section>
        <div className="container">
            <div className="main_blog">
                <div className="blog_header">
                    <h2>Blog</h2>
                    <p>Qui eius et enim eos eum est et. Consectetur enim vero qui. Aut aut et veniam a. Non accusamus suscipit maiores rerum itaque id vel eos. Quis ipsam eveniet distinctio et nihil et id neque.</p>
                </div>
                <div className="blog_grid_container">
                    <BigCard />
                    <MainCard 
                        img={'./img/blog_4fr.png'} 
                        title={'Aliquam delectus et consequatur omnis laboriosam.'}
                        userImage={"./img/Frame 72.png"}
                        userName={'2123 dəfə oxundu'}
                        imgTitle={'education'}
                    />
                </div>
                <div className="grid_container">
                    {
                        blogs.map((data, i)=>{
                            return(
                                <MainCard key={i}
                                img={data.img} 
                                title={data.title}
                                userImage={data.userImg}
                                userName={data.readCount}
                                imgTitle={'education'}
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

export default BlogSection
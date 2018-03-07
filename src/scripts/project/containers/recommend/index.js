import React ,{Component} from "react";
import {connect} from "react-redux";
import {get_list} from "../../actions";
import { Carousel } from 'antd';
import {Link} from "react-router";

@connect(
    (state)=>({...state})
)
export default class Recommend extends Component{

    componentWillMount(){     
        const {dispatch} = this.props;
        dispatch(get_list("/recom",dispatch))
     
    }
    render(){
        const {recomlist}=this.props;
        // console.log(recommend);
        // console.log(recomlist);
        return(
            <div className="recommend"> 
               <Carousel autoplay >
                   { recomlist.map((item,i)=>{ 
                       return(
                        <Link key={i} to={ "/detail/"+item.title+"?img="+item.cover+item.author_title+item.chapter_num+item.frequency+item.theme_id+item.feature}>
                        
                                 <div className="recommendbox" >
                                      <img src={item.cover} />
                                 </div>  
                        </Link>                      
                       )
                             
                        }) 
                   } 
                  </Carousel> 
                  <div className="recommendbox2"> 
                      <p>
                          <span>客栈精品</span>
                          <span>更多></span>
                      </p>
                        { recomlist.map((item,i)=>{ 
                        return(
                        // <Link to={ "/detail/"+item.title+"?img="+item.cover+item.author_title+item.chapter_num+item.frequency+item.theme_id+item.feature}>
                         <Link key={i} to={ "/detail/"+item.title+"/"+item.author_title+"/"+item.chapter_num+"/"+item.frequency+"/"+item.theme_id+"/"+item.feature+"?img="+item.cover}>
                       
                                    <div className="recommed_box" >
                                        <img src={item.cover} />
                                        <div className="recommend_title">
                                            <p>{item.title}</p>
                                            <span>{item.feature}</span>
                                            
                                        </div>
                                    </div>  
                        </Link>                      
                        )
                                
                            })
                         }
                  </div>

                  <div className="recommendbox2"> 
                      <p>
                          <span>独家作品</span>
                          <span>更多></span>
                      </p>
                        { recomlist.map((item,i)=>{ 
                        return(
                        // <Link to={ "/detail/"+item.title+"?img="+item.cover+item.author_title+item.chapter_num+item.frequency+item.theme_id+item.feature}>
                        <Link key={i} to={ "/detail/"+item.title+"/"+item.author_title+"/"+item.chapter_num+"/"+item.frequency+"/"+item.theme_id+"/"+item.feature+"?img="+item.cover}>
                        
                                    <div className="recommed_box" key={i}>
                                        <img src={item.cover} />
                                        <div className="recommend_title">
                                            <p>{item.title}</p>
                                            <span>{item.feature}</span>
                                            
                                        </div>
                                    </div>   
                        </Link>                     
                        )
                                
                            })
                         }
                  </div>
                  
                    
            </div>
            
        )
        
    }
}
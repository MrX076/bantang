import React ,{Component} from "react";

import {connect} from "react-redux"

import {get_list} from "../../actions"
import {Link} from "react-router"

@connect(
    (state)=>({...state})
)
export default class Woman extends Component{

   

    componentWillMount(){
        // console.log(this.props)
        const {dispatch} = this.props;
        dispatch(get_list("/woman",dispatch))
    }

    render(){
        const {list,icon,text}=this.props;

        // console.log(this.props);
        return (
            <div className="man">          
               { list.map((item,i)=>{
                    return(
                      <div className="manbox" key={i}>
                       {/* <Link to={ "/detail/"+item.title+"?img="+item.cover+item.author_title+item.chapter_num+item.frequency+item.theme_id+item.feature}> */}
                       <Link to={ "/detail/"+item.title+"/"+item.author_title+"/"+item.chapter_num+"/"+item.frequency+"/"+item.theme_id+"/"+item.feature+"?img="+item.cover}>

                          <dl>
                              <dt>
                                  <img src={item.cover}/>
                              </dt>
                              <dd>
                                  <p>{item.title}</p>
                                  <p><span>热血</span></p>
                                  <p>{item.feature}</p>
                                  <p><span>{item.author_title}</span></p>
                              </dd>
                          </dl>
                          <div>
                              <i className={"iconfont "+icon}> </i>
                              <span>{text}</span>
                          </div>

                          </Link>

                      </div>
                            
                       
                    )
                 }) }

            </div>
        )
    }
}


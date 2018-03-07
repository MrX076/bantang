import React ,{Component} from "react";
import {connect} from "react-redux";
import {get_list} from "../../actions";
import {Link} from "react-router";

@connect(
    (state)=>({...state})
)

export default class Cartoon extends Component{

    componentWillMount(){     
        const {dispatch} = this.props;
        dispatch(get_list("/rising",dispatch))
    }

    render(){
        const {list}=this.props;
        return(
            <div className="rankchild">          
               { list.map((item,i)=>{
                    return(
                      <div className="rankchildbox" key={i}>
                       {/* <Link to={ "/detail/"+item.title+"?img="+item.cover+item.author_title+item.chapter_num+item.frequency+item.theme_id+item.feature}> */}
                       <Link to={ "/detail/"+item.title+"/"+item.author_title+"/"+item.chapter_num+"/"+item.frequency+"/"+item.theme_id+"/"+item.feature+"?img="+item.cover}>

                          <dl>
                              <dt>
                                  <img src={item.cover}/>
                              </dt>
                              <dd>
                                  <p>{item.title}</p>
                                  <p><span>{item.author_title}</span></p>
                                  <p>{item.feature}</p>
                                  <p><span>人气</span></p>
                              </dd>
                          </dl>
                        </Link>
                      </div>
                            
                       
                    )
                 }) }

                   
            </div>
        )
        
    }
}
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
        dispatch(get_list("/beforeyestoday",dispatch))
    }

    render(){
        const {list}=this.props;
        return(
            <div className="newchild">          
               { list.map((item,i)=>{
                    return(
                      <div className="newchildbox" key={i}>
                        {/* <Link to={ "/detail/"+item.comic_title+"?img="+item.comic_cover+item.author_title+item.chapter_num+item.frequency+item.theme_id+item.feature}> */}
                        <Link to={ "/detail/"+item.title+"/"+item.author_title+"/"+item.chapter_num+"/"+item.frequency+"/"+item.theme_id+"/"+item.feature+"?img="+item.comic_cover}>

                          <dl>
                              <dt>
                                  <img src={item.comic_cover}/>
                              </dt>
                              <dd>
                                  <p>{item.comic_title}</p>
                                  <p><span>今日</span></p>
                                  <p>{item.feature}</p>
                                  <p><span>{item.chapter_title}}</span></p>
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
import React,{Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"

@connect(
    (state)=>({...state})
)

export default class Cartoon extends Component{
   
    render(){
            return(
                    <div className="recom">
                        {
                            this.props.recomList.map((item,i)=>{
                                return(
                                    <Link key={i} to={item.path} activeClassName="active" >                                       
                                        {item.txt}
                                    </Link>
                                )
                            })
                        }
                        <span>
                            <i className={"iconfont " +this.props.icon2} ></i>
                        </span>
                        
                    </div>
                )
    }
} 



    
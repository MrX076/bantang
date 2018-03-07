import React ,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
@connect(
    (state)=>({...state})
)
export default class Ranking extends Component{

    render(){
        // console.log(this.props)
        return(
          
            <div className="news">
                <img src="" />  
                <div className="newsbox">
                                   
                {                   
                    this.props.newsList.map((item,i)=>{
                        return(
                            <Link key={i} to={item.path} activeClassName="active">
                                <p>{item.txt}</p>
                            </Link>
                        )
                        
                    })
                }
                </div>
                <div className="newschild">
                    {this.props.children}
                </div>
  
            </div>
                  
        )
        
    }
}
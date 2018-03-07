import React ,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import { Tabs } from 'antd';
@connect(
    (state)=>({...state})
)
export default class Ranking extends Component{

    render(){
        // console.log(this.props)
        return(
          
            <div className="ranking"> 
            <div className="img">

            </div>
                {/* <img src="" />   */}
                <div className="rankingbox">
                                  
                {                   
                    this.props.rankList.map((item,i)=>{
                        return(
                            <Link key={i} to={item.path} activeClassName="active">
                                <p>{item.txt}</p>
                            </Link>
                        )
                        
                    })
                }
            </div>       
                <div className="rankingchild">
                    {this.props.children}
                </div>   
            </div>
                  
        )
        
    }
}
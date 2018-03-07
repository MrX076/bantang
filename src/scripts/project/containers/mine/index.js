import React ,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
@connect(
    (state)=>({...state})
)
export default class Cartoon extends Component{
    render(){
        const {minelist}=this.props.mineList;
        // console.log(this.props.mineList[0]);
        return(
           <div className="mine">           

                {
                    this.props.mineList[0].map((item,i)=>{
                        return(
                            <div className="minehead" key={i}>
                            <Link to={item.path}>
                                 <i className={"iconfont "+item.icon} ></i>
                                <span>{item.txt}</span>
                            </Link>
                               
                             
                            </div>
                        )
                        
                    })
                }
    

                <div className="minebox"> 
                <ul>
                        {
                            this.props.mineList[1].map((item,i)=>{
                                return(
                                    <li key={i}>
                                       <i className={"iconfont "+item.icon}>- -</i>
                                        <p>{item.txt}</p> 
                                    </li>
                                    
                                )
                            })
                        }
                  </ul> 
                        

                    <div className="minebox_m">
                        {
                            this.props.mineList[2].map((item,i)=>{
                                return(
                                    <p key={i}>
                                        <i className={"iconfont "+item.icon}></i>
                                        <span>{item.txt}</span> 
                                    </p>    
                                )
                            })
                        }
                    </div>
                </div>   
            </div> 
        )
        
    }
}
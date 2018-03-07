import React,{Component} from "react"
// import Head from "../../components/head"
import Foot from "../../components/foot"
import {connect} from "react-redux"


export default class Cartoon extends Component{


    render(){
        // const {title} = this.title;
        return(
            <div>
                
                <div key={this.props.children.pathname}>
                    {this.props.children}
                </div>  
                <Foot/>  
                {/* <div className="sousuo" ref="lefts">
                    <input type="text" placeholder="请输入漫画名/作者"/>
                    <span >取消</span>
                </div> */}
            </div>
            
        )
    }
}
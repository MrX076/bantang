import React ,{Component} from "react";
import Recom from "../../components/recom";
export default class Cartoon extends Component{
    render(){
        return(
            <div>
                <Recom/>
                <div className="recombox">
                    {this.props.children}
                </div>                 
            </div>
        )
    }
}
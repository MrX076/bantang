import React,{Component} from "react"
import {Link} from "react-router"

export default class Register extends Component{
    
    render(){
      
        return(
            <div className="register">
             <div className="registerhead">
                 <p>
                     <Link to="/login">
                        <i> > </i>
                     </Link>
                     
                     <span>快速注册</span>
                 </p>              
             </div>
             <form className="registerfrom">
                 <input type="text" placeholder="用户名" />
                 <input type="password" placeholder="密码" />
                 <input type="password" placeholder="确认密码" />
                 <input type="submit" value="注册"/>
             </form>
             <Link to="/login">
                <p>
                    <i></i>
                    <span>前往登录</span>
                </p> 
             </Link>

           </div>
          
        )

      

    }
}



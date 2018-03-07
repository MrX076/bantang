import React,{Component} from "react"
import {Link} from "react-router"
import {Router,Route} from "react-router";

export default class Login extends Component{
    click=()=>{
        this.props.router.go(-1);
    }
    
    render(){
  
        return(
            <div className="login">
             <div className="loginhead">
                 <p>
                     <a onClick={this.click}> > </a>
                     <Link to="main/man">
                        <span>忘记密码？</span> 
                     </Link>
                     
                 </p>              
             </div>
             <form className="loginform">
                 <input type="text" placeholder="用户名" />
                 <input type="password" placeholder="密码" />
                 <input type="submit" value="登录"/>
             </form>
             <Link to="/register">
                <p>
                    <i></i>
                    <span>闪电注册</span>
                </p> 
             </Link>

           </div>
          
        )

      

    }
}


// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// const FormItem = Form.Item;

//  class Logins extends React.Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <FormItem>
//           {getFieldDecorator('userName', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(
//             <Checkbox>Remember me</Checkbox>
//           )}
//           <a className="login-form-forgot" href="">Forgot password</a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </FormItem>
//       </Form>
//     );
//   }
// }

// const Login = Form.create()(Logins);
// export default Login;


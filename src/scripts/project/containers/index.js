import React ,{Component} from "react"
import {render} from "react-dom"
import {browserHistory,Router,Route,IndexRedirect,Redirect,hashHistory} from "react-router"

import App from "./app"
import Main from "./main"
import Classify from "./classify"
import Bookstack from "./bookstack"
import Mine from "./mine"
import Man from "./man"
import Woman from "./woman"
import Recommend from "./recommend"

import News from "./news"
import Today from "./news/today"
import Yestoday from "./news/yestoday"
import Beforeyestoday from "./news/beforeyestoday"

import Ranking from "./ranking"
import Popularity from "./ranking/popularity"
import Month from "./ranking/month"
import Collect from "./ranking/collect"
import Exclusive from "./ranking/exclusive"
import Newlist from "./ranking/newlist"
import Rising from "./ranking/rising"

import Login from "./login"
import Register from "./register"
import Details from "./details/detail"

export default class Layout extends Component{
    render(){
    return(
    
        <Router history={hashHistory}>
            <Redirect from="/manke/dist" to="/" />
            <Route path="/" component={App}>
                <IndexRedirect to="main"/>
                <Route path="main" component={Main}>  {/* recommend 子路由*/}
                    <IndexRedirect to="/main/man"/>
                    <Route path="/main/man" component={Man}/>
                    <Route path="/main/woman" component={Woman}/>
                    <Route path="/main/recommend" component={Recommend}/>
                    
                    <Route path="/main/news" component={News}>
                        <IndexRedirect to="/main/news/today"/>
                        <Route path="/main/news/today" component={Today}/>
                        <Route path="/main/news/yestoday" component={Yestoday}/>
                        <Route path="/main/news/beforeyestoday" component={Beforeyestoday}/>
                    
                    </Route>
                    
                    <Route path="/main/ranking" component={Ranking}>
                        <IndexRedirect to="/main/ranking/popularity"/>
                        <Route path="/main/ranking/popularity" component={Popularity}/>
                        <Route path="/main/ranking/month" component={Month}/>
                        <Route path="/main/ranking/collect" component={Collect}/>
                        <Route path="/main/ranking/exclusive" component={Exclusive}/>
                        <Route path="/main/ranking/newlist" component={Newlist}/>
                        <Route path="/main/ranking/rising" component={Rising}/>

                    </Route>

                </Route>

                <Route path="classify" component={Classify}/>
                <Route path="bookstack" component={Bookstack}/>
                <Route path="mine" component={Mine}/>
            </Route>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/detail/:title/:author/:num/:frequency/:theme_id/:feature" component={Details} />
        </Router>
    )
   
    }
}
 


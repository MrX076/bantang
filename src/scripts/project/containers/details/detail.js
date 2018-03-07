

import React ,{Component} from "react";

// hashHistory,IndexRoute,Redirect,IndexRedirect,browserHistory
import {Router,Route} from "react-router";
import {connect} from "react-redux";
import "../../../utils/swiper-3.3.1.min.js";
import {get_list} from "../../actions"
@connect(
    (state)=>({...state})
)


export default class Detail extends Component{

    click=()=>{
        this.props.router.go(-1);
    }
    static contextTypes={
        router: React.PropTypes.object
    }

    constructor(props){
        super(props)
        this.state = {
            swiperIndex:0
        }
    }
    changeIndex=(i)=>{
        this.mySwiper.slideTo(i,100)
    }
    componentWillMount(){     
        const {dispatch} = this.props;
        dispatch(get_list("/man",dispatch))
}

    render(){
        const {swiperIndex} = this.state;
        const {params,location,list} = this.props;
        return (
            <div className="details">
                <div className="detailhead">
                    <p>
                        
                        <i onClick={this.click}>返回</i> 
                        <i>下载</i>
                        <i>分享</i>
                    </p>
                    <dl>
                        <dt>
                            <p>{params.title}</p>
                            <p>热血 ，青春</p>
                            <p>作者：{params.author}</p>
                        </dt>
                        <dd>
                            <img src={location.query.img}/>
                        </dd>
                    </dl>
                </div>
                <div className="detailbox">
                    <dl>
                        <dt>收藏</dt>
                        <dd>开始阅读</dd>
                    </dl>

                    <p>
                        {
                            this.props.details[1].map((item,index)=>{
                                return(
                                    <span key={index} onClick={()=>{this.changeIndex(index)}} className={swiperIndex==index?"nav_active":""} >{item.txt}</span>
                                )
                            })
                        }
                    </p>
                    <div className="swiper-container" id="swiper-c">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide ">
                                <div className="remen">
                                  <h1>作品简介：{params.feature}</h1>
                                </div>
                            </div>
                            <div className="swiper-slide ">
                                <div className="remen">
                                     
                                    <h1>目录</h1>                                  
                                </div>
                            </div>
                            <div className="swiper-slide ">
                                <div className="remen">
                                     
                                    <h1>评论</h1>                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

    componentDidMount(){
        const {swiperIndex} = this.state
        var that = this
        this.mySwiper = new Swiper("#swiper-c",{
            loop:false,
            autoplay: false,
            direction:"horizontal",
            pagination: '.swiper-pagination',
            resistanceRatio:0,
            calculateHeight:true,
            initialSlide:0,
            autoHeight:true,
            onSlideChangeEnd(swiper){
                that.setState({
                    swiperIndex:swiper.activeIndex
                })
            }    
        });
    }
}
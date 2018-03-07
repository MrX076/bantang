import React ,{Component} from "react";
import { Carousel } from 'antd';
import "../../../utils/swiper-3.3.1.min.js";
import {connect} from "react-redux";
import {Link} from "react-router";
@connect(
    (state)=>({...state})
)
export default class Cartoon extends Component{
    constructor(props){
        super(props)
        this.state = {
            swiperIndex:0
        }
    }
    changeIndex=(i)=>{
        this.mySwiper.slideTo(i,100)
    }

    render(){
        const {swiperIndex} = this.state;
        
        return(
            <div className="bookstack">          
                <ul className="bookstacknav">
                {
                            this.props.bookList.map((item,index)=>{
                                return(
                                    <li key={index} onClick={()=>{this.changeIndex(index)}} className={swiperIndex==index?"nav_active":""} >{item.txt}</li>
                                )
                            })
                        }
                </ul>
               
                <div className="swiper-container" id="swiper-c">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide_1">
                            <div className="history">
                                <p>登录后可同步阅读历史 
                                <Link to="/login">
                                    <span>登录</span>
                                </Link>
                                    
                                </p>
                                <div>

                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide slide_2">
                            <div className="history">
                                <div className="soucang">
                                    
                                </div>
                                <Link to="/login">
                                    <button>登录</button>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="swiper-slide slide_3">
                            <div className="history">
                                <div className="huancun">

                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide slide_4">
                            <div className="history">
                                <div className="soucang"></div>
                                <Link to="/login">
                                    <button>登录</button>
                                </Link>
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
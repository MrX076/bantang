import React ,{Component} from "react";
import { Carousel } from 'antd';
import {connect} from "react-redux";
import "../../../utils/swiper-3.3.1.min.js";
import {get_list} from "../../actions"
import {Link} from "react-router"
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

    componentWillMount(){     
            const {dispatch} = this.props;
            dispatch(get_list("/man",dispatch))
    }

    render(){

        
        const {swiperIndex} = this.state;
        const {list} = this.props;
        return(
            <div className="classify">
                <div className="classifybox">
                    {
                        this.props.classList.map((item,i)=>{
                            //  console.log(item.length);
                                return(
                                   <ul key={i}>
                                   {
                                       item.map((ite,id)=>{
                                           return(
                                               <li key={id}>{ite.txt}</li>
                                           )
                                       })    
                                   } 
                                   </ul>
                              ) 
                        })
                    }
                    
                </div>

                    <p>
                        {
                            this.props.classList2.map((item,index)=>{
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
                                    {
                                        list.map((item,i)=>{
                                            return(
                                                
                                                
                                                <div key={i}>
                                       <Link to={ "/detail/"+item.title+"/"+item.author_title+"/"+item.chapter_num+"/"+item.frequency+"/"+item.theme_id+"/"+item.feature+"?img="+item.cover}>

                                                    <img src={item.cover} />
                                                    <p>{item.title}</p>
                                                    <p>{item.feature}</p>
                                                 </Link>   
                                                </div>
                                                
                                                
                                            )
                                            
                                        })
                                    }
                                </div>
                            </div>
                            <div className="swiper-slide ">
                                <div className="remen">
                                    {
                                        list.map((item,i)=>{
                                            return(
                                                <div key={i}>
                                                {/* <Link to={ "/detail/"+item.title+"?img="+item.cover+item.author_title+item.chapter_num+item.frequency+item.theme_id+item.feature}> */}
                                                <Link to={ "/detail/"+item.title+"/"+item.author_title+"/"+item.chapter_num+"/"+item.frequency+"/"+item.theme_id+"/"+item.feature+"?img="+item.cover}>
                                               
                                                    <img src={item.cover} />
                                                    <p>{item.title}</p>
                                                    <p>{item.feature}</p>
                                                </Link>
                                                 </div>
                                            ) 
                                        })
                                    }
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
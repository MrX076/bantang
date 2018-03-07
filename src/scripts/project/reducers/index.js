
var initState = {
    footList:[
        {path:"/main",txt:"首页",icon:"icon-shouye"},
        {path:"/classify",txt:"分类",icon:"icon-fenlei"},
        {path:"/bookstack",txt:"书架",icon:"icon-shuji1"},
        {path:"/mine",txt:"我的",icon:"icon-wode"},
    ],
    recomList:[
        {path:"/main/man",txt:"男生"},
        {path:"/main/woman",txt:"女生"},
        {path:"/main/recommend",txt:"推荐"},
        {path:"/main/news",txt:"跟新"},
        {path:"/main/ranking",txt:"排行"}
    ],
   rankList:[
        {path:"/main/ranking/popularity",txt:"人气榜"},
        {path:"/main/ranking/month",txt:"月票榜"},
        {path:"/main/ranking/collect",txt:"收藏榜"},
        {path:"/main/ranking/exclusive",txt:"独家榜"},
        {path:"/main/ranking/newlist",txt:"新作榜"},
        {path:"/main/ranking/rising",txt:"上升榜"}
    ],
    newsList:[
        {path:"/main/news/today",txt:"今天"},
        {path:"/main/news/yestoday",txt:"昨天"},
        {path:"/main/news/beforeyestoday",txt:"前天"},
    ],
    bookList:[
        {txt:"历史"},
        {txt:"收藏"},
        {txt:"缓存"},
        {txt:"订购"},
    ],
    classList:[
        [
            {txt:"全部"}, {txt:"霸道"},{txt:"修真"}, {txt:"恋爱"},{txt:"校园"}, {txt:"冒险"},{txt:"搞笑"},{txt:"生活"}, {txt:"热血"},{txt:"架空"},{txt:"后宫"},{txt:"玄幻"},
            {txt:"悬疑"},{txt:"恐怖"},{txt:"灵异"},{txt:"穿越"},{txt:"竞技"},{txt:"励志"}
        ],
        [
            {txt:"全部"}, {txt:"连载"},{txt:"完结"}, 
        ],
        [
            {txt:"全部"}, {txt:"免费"},{txt:"付费"},{txt:"VIP"} 
        ]
    ],
    classList2:[
        {txt:"热门"},{txt:"最新"}
    ],

    mineList:[
        [
            {path:"/login",icon:"icon-shuji",txt:"主人，戳这里登录~"}
        ],
        [
            {icon:"",txt:"关注"},
            {icon:"",txt:"粉丝"},
            {icon:"",txt:"元宝"},
            {icon:"",txt:"月票"},
        ],
        [
            {icon:"icon-zhanghu",txt:"我的账户"},
            {icon:"icon-shezhi",txt:"阅读设置"},
            {icon:"icon-huancun",txt:"缓存设置"},
            {icon:"icon-fankui",txt:"问题反馈"},
            {icon:"icon-help",txt:"使用帮助"},
            {icon:"icon-shuaxinrefresh39",txt:"检查更新"},
            {icon:"icon-tubiaozhizuomoban",txt:"关于我们"}
            
        ]
    ],

    details:[
        [
            {icon:""},
            {icon:""},
            {icon:""}
        ],
        [
            {txt:"详情"},
            {txt:"目录"},
            {txt:"评论"}
        ]
    ],

    list:[],
    recomlist:[],
    icon:"icon-shuji1",
    icon2:"icon-sousuo",
    text:"速看"
  
}


export default (state=initState,action)=>{
    switch(action.type){
        
        // case "0":
        // return Object.assign({},state);
        // break;

        case "get_list_success":
        // console.log(action.json)
        state.list = action.json;
        state.recomlist=action.json;
        return Object.assign({},state);
        break; 

        // case "to_login_success":
        // if(state.islogin=="登录成功!"){
        //     message.success("登录成功!",2);
        // }
        // state.islogin = action.json;
        // state.username = action.username;
        // if(state.islogin=="登录成功!"){
        //     console.log("登录成功!");
        //     localStorage.username=state.username;
        //     browserHistory.push("/");
        // }
        // return Object.assign({},state);
        // break;

        // case "to_register_success":
        // if(state.isregister=="插入成功!"){
        //     message.success("注册成功!",2);
        // }
        // if(state.isregister=="插入失败!"){
        //     message.error("注册失败,用户名已注册!",2);
        // }
        // state.isregister = action.json;
        // if(state.isregister=="插入成功!"){
        //     console.log("注册成功!");
        //     browserHistory.push("/login");
        // }
        

        default:
        return Object.assign({},state);
        break;
    }
}


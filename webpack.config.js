
var path = require ('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:8].js',//以文件内容的MD5生成Hash名称的script来防止缓存
        publicPath: '',//生成的html里的引用路径用 publicPath
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: ['babel-loader'],
                exclude: [path.resolve(__dirname, 'node_modules'),path.resolve(__dirname, './assets')]
            },
            {
                test: /\.(css|less)$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader',{
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('cssgrace'),
                                    require('postcss-px2rem')({remUnit: 108}),
                                    require('autoprefixer')(),
                                ];
                            }
                        }
                    },'less-loader']
                })
            },{
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                use: ['url-loader?limit=8192&name=font/[hash:8].[name].[ext]']
            }]

    },
    
    devServer:{    // 配置服务器   webpack-dev-server
        contentBase:path.join(__dirname,"dist"),  // 服务器目录 
        compress:true,
        hot:true,
        host:"0.0.0.0",
        port:7000,
        publicPath:"/",
        historyApiFallback: true,    // html5 history api 
        disableHostCheck: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],//将公共模块提出
            minChunks: Infinity//提取所有entry共同依赖的模块
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true, // 自动注入
            minify: {
                removeComments: true,        //去注释
                collapseWhitespace: true,    //压缩空格
                removeAttributeQuotes: true  //去除属性引用
            },
        }),
        new ExtractTextPlugin({
            filename: 'app.[hash].css',
            allChunks: true,
            disable: false
        }),
    ]
}



// var path = require("path");
// var webpack = require("webpack");   //main.js  出口文件
// var HtmlWebpackPlugin  = require("html-webpack-plugin");  // 曹组 html
// var OpenBrowserWebpackPlguin  =  require("open-browser-webpack-plugin"); // 打开浏览器 
// var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");  // 抽离样式 css文件
// module.exports = {
//     entry:["./src/scripts/index.js"],
//     devtool:"source-map",
//     output:{
//         path:path.resolve(__dirname,"dist"),
//         filename:"js/[name].[hash:8].js",   //以文件内容 的  MD5 加密 生成 hash 名称的scripts 来防止缓存
//         publicPath:"/"   // 生成 html 自动引用路径 publicPath 
//     },
//     module:{   // 模块声明加载 方式 js / css / img
//         rules:[
//             {
//                 test:/\.js[x]?$/,
//                 use:["babel-loader"],
//                 exclude:[path.resolve(__dirname,'node_modules'),path.resolve(__dirname,'./assets')]
//             },
//             {
//                 test:/\.(css|less)$/,
//                 use:ExtractTextWebpackPlugin.extract({
//                     fallback:"style-loader" ,    //  转成 node 风格代码
//                     use:["css-loader",{    // css-loader打包模块
//                         loader:"postcss-loader",    
//                         options:{
//                             plugins:function(){
//                                 return [
//                                     require("cssgrace"), 
//                                     require("postcss-px2rem")({remUnit:108}),
//                                     require("autoprefixer")()
//                                 ]
//                             }
//                         }
//                     },'less-loader']
//                 })
//             },
//             {
//                 test:/\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
//                 use:["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"]
//             },
//         ]
//     },
//     devServer:{    // 配置服务器   webpack-dev-server
//         contentBase:path.join(__dirname,"dist"),  // 服务器目录 
//         compress:true,
//         hot:true,
//         host:"0.0.0.0",
//         port:7000,
//         publicPath:"/",
//         historyApiFallback: true,    // html5 history api 
//         disableHostCheck: true,
//     },

//     // 插件
//     plugins:[
//         new OpenBrowserWebpackPlguin({url:"http://localhost:7000"}),

//         new HtmlWebpackPlugin({
//             template:"./src/index.html",
//             inject:true         // 自动注入   js/css
//         }),

//         new ExtractTextWebpackPlugin({
//             filename:"app.[hash].css",
//             allChunks:true,
//             disable:false
//         }),

//         new webpack.HotModuleReplacementPlugin(),  

//     ]
// }

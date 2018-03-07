react  框架 
组件化开发的原生js的框架 


极速渲染能力  虚拟dom virture dom 
高度组件模块化   组件之间可以复用 
(稳定性 经过大量测试)

适用于 逻辑较为复杂的大型应用项目    
MIT  协议   公平公开公正



react  和   vue    对比  
相同 
a.  react 和 vue 都有组件  都使用  虚拟dom  (virtual dom)
b.  vue  和  react  都提供了 组件化的视图(composible),  响应式概念 
c.  react  和  vue  都有核心渲染组件的 api , 创建组件 api库, 完整框架的生态圈, 遵循路由匹配规则,各种状态管理机制(react-redux/vuex)

不同
a.  react 用jsx (app.jsx) 来编写组件 javascript xml 来渲染页面  vue 用 template 来编写组件模板
b.  vue 较react 有更快的渲染组件的能力  ,react 比 vue 开发周期长,运行速度慢
c.  vue 和  react 都有各自不同的生命周期钩子函数  运动钩子函数   



react  特点
1.虚拟dom (开发时候不需要在页面中写任何dom元素) victure dom
2.jsx语法(写页面时候使用javascript xml格式的语法)
3.组件化开发(react最核心的思想是将页面中任何一个区域或者元素都
看成是一个组件 Component)
4.单向数据流(组件和后端之间的数据是单向的，从后端流动到react组件中)
5.组件生命周期(任何一个组件在dom中都具有一个完整的声明周期，组件初始化的时候开始，组件被移除的时候消失，从而保证性能的优越) 


虚拟dom  
虚拟DOM则是在DOM的基础上建立了一个抽象层，
我们对数据和状态所做的任何改动，都会被自动且高效的同步到虚拟DOM，最后再批量同步到DOM中

# React 参考再读
* 1、自定义属性的设置和读取
``` jsx
<div data-content="naninani"></div>

e.target.getAttribute('content');
```

* 2、如果需要在手机或平板等触摸设备上使用 React，需要调用 React.initializeTouchEvents(true); 启用触摸事件处理。

* 3、无状态组件
常用的模式是创建多个只负责渲染数据的无状态（stateless）组件，在它们的上层创建一个有状态（stateful）组件并把它的状态通过 props 传给子级。这个有状态的组件封装了所有用户的交互逻辑，而这些无状态组件则负责声明式地渲染数据。

* 4、es6不能再用mixins
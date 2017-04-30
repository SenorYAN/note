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

* 5、使用JSX的点标识符
您还可以使用JSX中的点表示符来引用React组件。 如果您有一个模块会导出很多React组件的话，使用这种方法就会十分方便。 例如，如果MyComponents.DatePicker是一个组件，您可以直接从JSX使用它：
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const MyComponents = {
    DatePicker(props) {
        return <div>这里有一个颜色为{props.color}的日期选择器</div>
    }
};

function BlueDataPicker(props) {
    return <MyComponents.DatePicker color="blue" />
}

ReactDOM.render(
    <BlueDataPicker />,
    document.getElementById('root')
);
```

* 6、proptypes
v15版本之后，proptypes从react中分拆出来，需要npm install prop-types
用来验证props的类型，或者必要
```javascript
Component.proptypes = {
		propety : PropType.string.isRequired
}
```
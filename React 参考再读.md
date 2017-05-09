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
		// 你可以定义一个js原始类型的prop,默认请情况下，这是都是可选的
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol,

  // 任何可以渲染的东西：数字，字符串，元素或数组（或片段）。
  optionalNode: React.PropTypes.node,

  // React元素
  optionalElement: React.PropTypes.element,

  // 你也可以声明prop是某个类的实例。 内部使用的是JS的instanceof运算符。
  optionalMessage: React.PropTypes.instanceOf(Message),

  // 你可以通过将它作为枚举来确保你的prop被限制到特定的值。
  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

  // 可以是许多类型之一的对象
  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ]),

  // 某种类型的数组
  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

  // 具有某种类型的属性值的对象
  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

  // 采取特定样式的对象
  optionalObjectWithShape: React.PropTypes.shape({
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
  }),

  // 你可以用`isRequired`来连接到上面的任何一个类型，以确保如果没有提供props的话会显示一个警告。
  requiredFunc: React.PropTypes.func.isRequired,

  // 任何数据类型
  requiredAny: React.PropTypes.any.isRequired,

  // 您还可以指定自定义类型检查器。 如果检查失败，它应该返回一个Error对象。 不要`console.warn`或throw，因为这不会在`oneOfType`内工作。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 您还可以为`arrayOf`和`objectOf`提供自定义类型检查器。 如果检查失败，它应该返回一个Error对象。 
  // 检查器将为数组或对象中的每个键调用验证函数。 
  // 检查器有两个参数，第一个参数是数组或对象本身，第二个是当前项的键。
  customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
}
```

* 7、关于this的bind问题
bind集中在constructor中，不要在props里写，避免重复。
可以用箭头函数，自动绑定this

* 8、PureComponent
PureComponent改变了生命周期方法 shouldComponentUpdate ，并且它会自动检查组件是否需要重新渲染。这时，只有PureComponent检测到 state 或者 props 发生变化时，PureComponent才会调用 render 方法。
应该在没有子组件和只负责UI展示的组件里使用pure

* 9、生命周期详细总结
> 创建并插入dom，依次调用：  
> constructor  ->  componentWillMount -> render -> componentDidMount  
> 更新状态：  
> componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate  
> 卸载：  
> componentWillUnmount  

* 10、setStateAsync
```javascript
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async componentDidMount() {
    StatusBar.setNetworkActivityIndicatorVisible(true)
    const res = await fetch('https://api.ipify.org?format=json')
    const {ip} = await res.json()
    await this.setStateAsync({ipAddress: ip})
    StatusBar.setNetworkActivityIndicatorVisible(false)
  }
```

* 11、状态计算函数
```javascript
  incrementCount(){
   this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
   this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }
```

第二个setState传入的prevState值就是第一个setState执行完毕之后的计数值，也顺利保证了连续自增两次。
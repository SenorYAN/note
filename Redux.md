# Redux
## 1、Action：描述事情的发生
* Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
* 减少在Action中传递数据

## 2、reducer：改变state，如何更新state
* reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
* 永远不要在reducer中干以下的事情：
> 修改传入参数；  
> 执行有副作用的操作，如 API 请求和路由跳转；  
> 调用非纯函数，如 Date.now() 或 Math.random()。  
* 我们将以指定 state 的初始状态作为开始。Redux 首次执行时，state 为 undefined，此时我们可借机设置并返回应用的初始 state。
```javascript
function todoApp(state = initialState, action) {
  // 这里暂不处理任何 action，
  // 仅返回传入的 state。
  return state
} 
```
> reducer千万不要修改state，使用Object.assign({}, state,  newState)  
> 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。  
注意每个 reducer 只负责管理全局 state 中它负责的一部分。每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。

## 3、store
Store 就是把它们联系到一起的对象。Store 有以下职责：
* 维持应用的 state；
* 提供 getState() 方法获取 state；
* 提供 dispatch(action) 方法更新 state；
* 通过 subscribe(listener) 注册监听器;
* 通过 subscribe(listener) 返回的函数注销监听器。
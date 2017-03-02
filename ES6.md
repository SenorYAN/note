# ES6
## Promise
* 状态分三种
对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。

* 实例构造
```
var promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

1.、resolve和reject函数由引擎提供，不需要部署
2、前者是状态变成resolved时將异步操作的结果作为参数传递出去，后者是变成rejected时

* 回调函数
promise实例生成之后，用then方法分别指定resolved和reject状态的回调
```
promise.then(function(value) {
  // success，resolved的回调函数，作为第一个参数
}, function(error) {
  // failure，reject的回调函数，作为第二个参数，可选
});
```

* 简单例子
```
function timeout(ms){
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, ms, 'done');,//这里的第三个参数作为第一个函数的参数传入，所以被resolve输出.
	});
}

timeout(100).then(function(value) {
	console.log(value);
})
```
# ES6-promise
## 1. Promise
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
3、promise新建之后立即执行

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

* 异步加载图片的例子
```
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
```

* 异步ajax
```
var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```


promise作为resolve和reject的参数
```
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})
        
var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2.then(result => console.log(result)) //p1 is rejected, p2 is the same as p1
.catch(error => console.log(error)) // Error: fail
```

p1是一个Promise，3秒之后变为rejected。p2的状态在1秒之后改变，resolve方法返回的是p1。此时，由于p2返回的是另一个Promise，所以后面的then语句都变成针对后者（p1）。又过了2秒，p1变为rejected，导致触发catch方法指定的回调函数


## 2. Promise.prototype.then()
then方法为promise添加状态发生改变的回调函数，返回一个promise实例的话采用链式写法

* 链式写法
```
getJSON(“/post/1.json”).then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log(“Resolved: “, comments);
}, function funcB(err){
  console.log(“Rejected: “, err);
});
```
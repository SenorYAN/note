# generator & async & await
## 1、协程
协程是指多个线程互相协作，完成异步任务。
> 第一步，协程A开始执行。  
> 第二步，协程A执行到一半，进入暂停，执行权转移到协程B。  
> 第三步，（一段时间后）协程B交还执行权。  
> 第四步，协程A恢复执行。  
```javascript
function *asyncJob() {
  // ...其他代码
  var f = yield readFile(fileA);
  // ...其他代码
}
```
上面代码的函数asyncJob是一个协程，它的奥妙就在其中的yield命令。它表示执行到此处，执行权将交给其他协程。也就是说，yield命令是异步两个阶段的分界线。

协程遇到yield命令就暂停，等到执行权返回，再从暂停的地方继续往后执行。它的最大优点，就是代码的写法非常像同步操作，如果去除yield命令，简直一模一样。

* Promise异步generator
```javascript
function* gen(ms){
    var result = yield new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(1, new Date(), 'setTimeout');
            resolve('success');
        },ms)
    })
}

console.log(0, new Date(), 'setTimeout');
const g = gen(2000);
const result = g.next();
g.next();

result.value.then((data) => {
    console.log(2, new Date(), data);
    return data;
}).then((data) => {
    console.log(3, new Date(), data)
})
```

控制台结果
```
main.js:1277 0 Thu Apr 20 2017 22:25:29 GMT+0800 (CST) "setTimeout"
main.js:1259 1 Thu Apr 20 2017 22:25:31 GMT+0800 (CST) "setTimeout"
main.js:1283 2 Thu Apr 20 2017 22:25:31 GMT+0800 (CST) "success"
main.js:1286 3 Thu Apr 20 2017 22:25:31 GMT+0800 (CST) "success"
```


## async & await
* 基本用法
async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
```javascript
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);
```

* async函数返回一个 Promise 对象。
async函数内部return语句返回的值，会成为then方法回调函数的参数。
```javascript
async function f() {
  throw new Error('出错了');
}

f().then(
  v => console.log(v),
  e => console.log(e)
)
// Error: 出错了
```

* 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
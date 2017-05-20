# ES6-Decorator
## 1、类的装饰
* 装饰器第一个参数是所要修饰的目标类
```javascript
 @decorator
class A {}

class A{}
A = decorator(A) || A;

function decorator(target){
}
//本质理解为编译时执行的函数
```

* 如果要添加实例属性，可以通过target.prototype对象操作
```javascript
// mixins.js
export function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

// main.js
import { mixins } from './mixins'

const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // 'foo'
```

## 2、类的方法的装饰
* 此时，修饰器函数一共可以接受三个参数，第一个参数是所要修饰的目标对象，第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象。

## 3、不用于函数
由于函数提升，会出现错误
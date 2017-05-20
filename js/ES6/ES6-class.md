# ES6-class
* constructor方法，构造方法
```javascript
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true 
```

* 类的内部所有定义的方法，都是不可枚举的（non-enumerable）,Object.key获取不到，必须用getOwnPropertyNames，但是用ES5，Object.prototype直接定义就是可枚举的；
* 与ES5一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
* 不存在变量提升
* super方法调用父类的constructor方法
* 大多数浏览器的ES5实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
# ES6-symbol
## Symbol(…)
1、Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。
2、如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
3、注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
4、Symbol值不能与其他类型的值进行运算，会报错。
5、Symbol值可以转换为字符串和布尔值。
6、不能用点运算符
```javascript
var mySymbol = Symbol();
var a = {};

a.mySymbol = ‘Hello!’;
a[mySymbol] // undefined
a[‘mySymbol’] // “Hello!”
```
上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个Symbol值。
```javascript
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = ‘Hello!’;

// 第二种写法
var a = {
  [mySymbol]: ‘Hello!’
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: ‘Hello!’ });

// 以上写法都得到同样结果
a[mySymbol] // “Hello!”
```
7、属性的遍历
Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
另一个新的API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
8、全局 Symbol 注册表
ES6 有一个用于创建 Symbol 的全局资源：Symbol 注册表，它为字符串和 Symbol 提供了一对一的关系。注册表使用 Symbol.for( key )返回 Symbol。

当出现key1 === key2时就会有Symbol.for( key1 ) === Symbol.for( key2 )。这种对应关系甚至是跨 service worker 和 iframe 的。
[ES6 的 Symbol 类型及使用案例 - 达尔文](https://my.oschina.net/u/2903254/blog/818796)
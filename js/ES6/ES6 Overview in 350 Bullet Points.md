# ES6 Overview in 350 Bullet Points
[本文原地址](https://github.com/bevacqua/es6) ，此处仅是翻译

# Table of Contents
* [Introduction](#introduction)
* [Tooling](#tooling)
* [Assignment Destructuring](#assignment-destructuring)
* [Spread Operator and Rest Parameters](#spread-operator-and-rest-parameters)
* [Arrow Functions](#arrow-functions)
* [Template Literals](#template-literals)
* [Object Literals](#object-literals)
* [Classes](#classes)
* [Let and Const](#let-and-const)
* [Symbols](#symbols)
* [Iterators](#iterators)
* [Generators](#generators)
* [Promises](#promises)
* [Maps](#maps)
* [WeakMaps](#weakmaps)
* [Sets](#sets)
* [WeakSets](#weaksets)
* [Proxies](#proxies)
* [Reflection](#reflection)
* [`Number`](#number)
* [`Math`](#math)
* [`Array`](#array)
* [`Object`](#object)
* [Strings and Unicode](#strings-and-unicode)
* [Modules](#modules)

# Introduction
* ES6 — 也通常被熟知为Harmony，es-next，ES2015 — 目前这种语言最新规范（现在已经不是最新了）
* ES6是2015年6月发布的规范
* 未来版本的规范命名将以ES[YYYY]的形式，例如：ES2016代表ES7
	*  每次发布一次，功能不削减
	* ES6我们还称它ES6
	* 从ES2016（ES7）开始，我们开始用ES[YYYY]的方式给新版本命名
	* 命名方案的主要原因是迫使浏览器供应商快速实现最新功能
	
<sup>[(back to table of contents)](#table-of-contents)</sup>

# Tooling
* ES6要使用需要一个JS-to-JS转换器
* 转换器用来
	* 把最新版本的代码转换成老版本
	* 随着浏览器更好的支持，未来会把ES2016和ES2017转换成ES6
	* 我们需要更好的源映射
	* 目前最可靠的使用ES6源代码的途径是在生产环境
* Babel（一种转换器）有一个关键特性：人类可读输出
* 使用 [`bebel`][1]来把ES6转换成ES5稳定版本
* 使用[`babelify`][2]把 `babel`整合进`Gulp`，`Grunt`或者`npm build`
* 多亏V8引擎，ES6需要Node.js v4.x.x 或者更高版本
* 也可以使用`bable-node`使得任何版本的node使用ES6，它把模块都转换到ES5
* Babel作为一个蓬勃发展的系统，已经支持了部分的ES2016和插件支持
* [阅读ES6 Tooling的历史][25]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Assignment Destructuring 
* `var {foo} = pony `等同于 `var foo = pony.foo`
* `var {foo: baz} = pony` 等同于 `var baz = pony.foo`
* 你可以设定默认值，`var {foo='bar'} = baz`将会在`baz.foo`是`undefined`时给`baz.foo`赋值’bar’
* 可以随便设置几个属性，设置别名也可以不设置
	* `var {foo, bar: baz} = {foo: 0, bar: 1}`  使得`foo: 0` 和 `baz: 1`
* 你能设置更深层的属性，`var {foo: {bar}} = { foo: { bar: 'baz' } }`使得`bar: 'baz'`
* 你也可以设置别名，`var {foo: {bar: deep}} = { foo: { bar: 'baz' } }` 使得`deep='baz'`
* 找不到的属性通常会返回`undefined`，例如：`var {foo} = {}`
* 深层属性找不到的时候会返回一个错误，例如：`var {foo: {bar}} = {}`
* 数组也同样有效，`var [a, b] = [0, 1]`，使得`a：0， b：0`
* 数组中也可以跳过一些元素，比如`var [a, , b] = [0, 1, 2]`使得 `a: 0 and b: 2`
* 你也可以不用辅助变量来交换，`[a, b] = [b, a]`
* 你也可以在函数里使用解构赋值
	* 像`function foo (bar=2) {}`一样设定参数默认值
	* 默认值也可以是对象，`function foo (bar={ a: 1, b: 2 }) {}`
	* 像`function foo ({ a=1, b=2 }) {}`一样完全解构
	* 当什么也没有提供时，默认值设置为空对象，`function foo ({ a=1, b=2 }) {}`
	* [深度阅读解构赋值][3]
	
<sup>[(back to table of contents)](#table-of-contents)</sup>


# Spread Operator and Rest Parameters
* 不定变量是更好的参数模式
	* 可以在函数中像这样声明变量，`function foo (...everything) {}`
	* `everything`是所有传入`foo`的参数数组
	* 你也可以在`...everything`之前定义一些变量，`function foo (bar, ...rest) {}`
	* 自定义的变量不包括在`...rest`中
	* `...rest`必须是列表中最后的一个变量
* 展开操作符相当魔幻
	* 使用方法时不用再用apply，`fn(...[1, 2, 3])` 相当于 `fn(1, 2, 3)`
	* 更容易的数组连接，`[1, 2, ...[3, 4, 5], 6, 7]`
	* 类数组结构转换成数组，例如`[...document.querySelectorAll('img')]`
	* 解构的时候也很有用，`[a, , ...rest] = [1, 2, 3, 4, 5]`使得`a: 1` 和 `rest: [3, 4, 5]`
	* 使得`new`操作和`apply`更加不费力，`new Date(...[2015, 31, 8])`
	*  [阅读更多ES6展开][6]
	
<sup>[(back to table of contents)](#table-of-contents)</sup>

# Arrow Functions
* 可以用箭头函数来简明的申明函数，像`param => returnValue`
* 在函数功能性操作时很有用，`[1, 2].map(x => x * 2)`
* 有一些需要你熟悉的技巧
	* 单参数时，`p1 => expr`
	* `p1 => expr`有一个隐形的return，返回值是`expr`
	* 要返回一个对象，必须包裹在一对括号里，像`() => ({ foo: 'bar' }) `这样，否则会返回错误
	* 当你有0个，2个或者更多个参数时，括号也是必须的
	* 右侧中括号表示有多句语句的代码块
	* 当使用代码块时，没有隐形返回，必须使用return
	* 你不能命名静态的箭头函数，但是当它运行时，对大多数方法而言推断出名字很容易
	* 箭头函数被绑定于上下文作用域
		* this和父作用域中的this一致
		* this不能够被call，apply或者其他方法改变
		* arguments值也被绑定到最近的普通函数，内部变量使用（…args）来获取
	* [阅读更多箭头函数][5]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Template Literals
* 单引号和双引号之外，你还可以用`` ` `` 符号来声明字符串
* 包裹在反引号里的字符串称作模版字符串
* 模版字符串可以是多行的
* 模版字符串允许插入变量，当`rating`是变量时，可以这么使用 `` `ponyfoo.com is ${rating}` ``
* 你也可以在插入变量中使用合理的js表达，例如 `` `${2 * 3}` `` or `` `${foo()}` ``
* 你也可以用标签模版来改变插入的js表达
	* 在模版字符串前面 加一个前缀，``fn`foo, ${bar} and ${baz}` ``
	* fn是一个被调用的函数
	* 模版是`['foo, ', ' and ', '']`，变量表达是`bar`和`baz`
	* fn的返回值是模版字符串的值
	* 尽可能使用包括表达式，插入参数，等等
* 模版字符串比包裹在单引号或者双引号里面的字符串更好
*  [阅读更多模版字符串][4]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Object Literals
* 可以只用`{ foo }`来代替`{ foo: foo }`
* 可以使用计算属性，`{ [prefix + 'Foo']: 'bar' }`, 当 `prefix: 'moz'`时， `{ mozFoo: 'bar' }`
* 使用计算属性的同时不能使用缩写，`{ [foo] }`是非法的
* 对象字面量中函数定义中使用更加简洁的语法
* 在 [`Object`](#object) 章节了解更多

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Classes
* 不是传统的类，是原型继承的语法糖  
* 语法和声明对象很像，`class Foo {}`
* 实例方法的声明可以用简短的对象字面量语法，`class Foo { bar () {} }`
* 静态方法需要`static`关键字前缀，`class Foo { static isPonyFoo () {} }`
* 可以用构造器方法`class Foo { constructor () { /* 初始值 */ } }`
* 原型继承有着更简单的语法，`class PonyFoo extends Foo {}`
* [阅读更多类][8]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Let and Const
* `let`和`const`是声明变量时`var`的其他选择
* `let`是块作用域而不是函数作用域
* `let`需要悬挂在代码块的顶部，而`var`放在函数的顶部
* 临时死区
	* 临时死区从一个有`let`申明的区块顶部开始
	* 到出现`let`申明为止（与悬挂无关）
	* 在临时死区里（`let`申明之前）使用`let`申明的变量会返回一个错误
	* 有助于避免一些奇怪的错误，当一个变量在声明之前调用
* `const`也是块作用域的，需要悬挂在顶上，被临时死区约束
* `const`申明的变量必须有初始值
* 在声明之后，修改`const`变量会默默的失败（不报错），在严格模式下会抛出异常
* `const`申明的变量，不会导致引用值不可变
	* `const foo = { bar: 'baz' } `意味着`foo`永远指向右侧的对象
	* ` foo.bar = ‘boo’`不会抛出异常
* 声明同名变量会抛出异常
* 为了修正重新分配变量时和丢失指向时出现的错误
* ES6中函数都是块作用域
	* 避免因为变量置顶而泄漏作用域，`{ let _foo = 'secret', bar = () => _foo; }`
	* 无论你想要怎样，大部分场合不要破开用户代码
* [阅读更多变量声明和暂时性死区][9]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Symbols
* Symbol是ES6中新的原始值类型
* 你可以通过`var symbol = Symbol()`创建自己的symbol
* 调试的时候你可以在Symbol中加一个描述，`Symbol('ponyfoo')`
* Symbols不可枚举且独一无二的，`Symbol()`, `Symbol()`, `Symbol('foo')` and `Symbol('foo')` 统统不一样
* Symbols的类型是symbol，`typeof Symbol() === 'symbol'`
* 你可以用`Symbol.for(key)`创建新的全局symbols
	* 假如symbol提供的key已经存在，它就会指向那个存在的symbol
```javascript
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

s1 === s2 // true
```
	* 否则将会新建一个symbol
	* `Symbol.keyFor`方法返回一个已登记的 Symbol 类型值的key
* Read [ES6 Symbols in Depth][12]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Iterators
* 迭代器和迭代协议决定了在任何对象上如何迭代，而不只是数组和类数组结构
* Symbol用作给对象分配迭代器
* `var foo = { [Symbol.iterator]: iterable}` 或者 `foo[Symbol.iterator] = iterable`
* `iterable`是一个能返回带有`next`方法的迭代器的方法
* `next`方法返回的对象有两个属性，`value`和`done`
	* `value`属性指明迭代队列中当前的值
	* `done`属性指明是否还有更多的值迭代
* 有`[Symbol.iterator]`属性的对象是可迭代的，这个属性决定了迭代协议
* 内置的数组，字符串，或者参数对象，或者浏览器里的节点列表，在ES6中都是默认可以迭代的
* 可迭代对象可以通过`for···of`来循环遍历，例如`for (let el of document.querySelectorAll('a'))`
* 可迭代对象可以用展开操作符合成，例如`[...document.querySelectorAll('a')]`
* 可以使用`Array.from`来把可迭代序列专程数组
* 迭代器是懒惰的，会产生一个无线序列直到出现一个合法程序
* 不要用`...`或者`Array.from`合成一个无限序列，因为这会导致无限循环
* Read [ES6 Iterators in Depth][10]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Generators
* 继发器函数是一种特殊的迭代器，它用`function* generator () {}`的语法声明
* 继发器函数用`yeild`来从元素序列里输出
* 继发器函数也可以用`yield*`来输出另一个继发器函数—或者任何一个可迭代对象
* 继发器函数返回一个继迭代器对象
* 也可以用`Array.from(g)`,` [...g]`,` for (let item of g)`, 或者只是 `g.next()`来展开数据
* 继发器函数的执行是可以暂停的，四种情形下请记住最后的位置
	* `yeild`输出序列中下一个值
	* `return`返回序列中最后一个值
	* `throw`完全终止继发器操作
	* 	继发器函数进行到最后的标志是`{ done: true }`
	* 一旦继发器序列结束了，`next`方法只会简单的返回`{ done: true }`而没有其他作用
	* 继发器使得异步流看起来像同步
		* 使用用户提供的继发器函数
		* 代码在异步发生的地方停止
		* 调用`next`方法，继续执行
	*  Read [ES6 Generators in Depth][11]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Promises
* `Promises/A+`规范在ES6标准化发布之前，已经被广泛应用（例如：bluebird）
* `Promise`是树形结构，通过`p.then(handler)` 和`p.catch(handler)`增加分支
* 通过`new Promise((resolve, reject) => { /* resolver */ })`新建`Promise`
	* `resolve(value)`回调函数，根据提供的`value`值完成`Promise`
	* `reject(reason)`回调函数，根据提供的理由，拒绝Promise，返回一个错误
	* 你可以异步调用这些方法，这些Promise树的深层分支
* 每次调用`then`和`catch`都会返回另一个promise
* Promises开始时是pending状态，无论完成和拒绝都会使得promise完成
* Promise一旦完成就不能改变状态
* 你可以串联随意多少个promises
* 每个分支要不然使用then，要不然使用catch，不能两件都用
* then回调函数转换前一个分支返回的值
* then回调函数会阻断另一个promise
* `p.catch(fn).catch(fn)`不会如你所愿，除非你想要捕获错误里面的错误
* Promise.resolve(value) 返回一个`value`值的完成状态的promise
* Promise.reject(reason) 返回一个`reason`原因的拒绝状态的promise
* Promise.all(...promises) 当所有promise完成或者有一个被拒绝时返回一个promise
* Promise.race(…promises)只要有一个promise完成就完成
* Read [ES6 Promises in Depth][32]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Maps
* 用普通JS对象创建哈希表
	* 避免了一些用户提供key值导致的安全问题
	* 允许key是任意值，你甚至可以用DOM元素和函数添加记录
* Map支持可迭代协议
* 使用`new Map()`创建新的Map
* 使用迭代器初始化Map，像`[[key1, value1], [key2, value2]] ` in `new Map(iterable)`
* 使用`map.set(key, value)`来设置键值
* 使用`map.get(key)`来获取键值
* 使用`map.has(key)`来检查是否有键值
* 使用`map.delete(key)`删除键值
* map也可以使用迭代器，展开符，Array.from等等
* Read [ES6 Maps in Depth][13]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# WeakMaps
* 和`Map`类似，但是不完全一样
* `WeakMap`是不可迭代的，所以你不能获取到枚举方法，比如`.forEach`, `.clear`这样Map中的方法
* `WeakMap`的键必须是引用类型（对象），你不可以使用symbols, numbers, 或者 string作为键
* `WeakMap`的键名所指向的对象，不计入垃圾回收机制
* `WeakMap`的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用
* Read [ES6 WeakMaps in Depth][29]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Sets
* 和`Map`类似，但是不完全相同
* `Set`没有key键，只有value值
* `set.set(value)`看起来不太对，所以我用`set.add(value)`替代
* `Set`不能有重复的值，因为值同时也是键
*  Read [ES6 Sets in Depth][30]

<sup>[(back to table of contents)](#table-of-contents)</sup>


# WeakSets
* `WeakSet`算是`Set`和`WeakMap`的一种杂交
* `WeakSet`是不能迭代遍历和没有枚举方法的`Set`
* `WeakSet`的值必须是引用值
* 无论引用是否激活在用，`WeakSet`只是弱引用
* Read [ES6 WeakSets in Depth][31]

<sup>[(back to table of contents)](#table-of-contents)</sup>

# Proxies
# Reflection
* `Reflection`是ES6新的内置静态对象（类似Math）
* `Reflection`的方法明显属于内部方法，例如：`Reflect.defineProperty`出错时返回一个布尔值，而不是抛出错误
* 

[1]: http://babeljs.io/ "Babel JavaScript Compiler"
[2]: https://github.com/babel/babelify "babel/babelify on GitHub"
[3]: https://ponyfoo.com/articles/es6-destructuring-in-depth "ES6 Destructuring in Depth on Pony Foo"
[4]: https://ponyfoo.com/articles/es6-template-strings-in-depth "ES6 Template Literals on Pony Foo"
[5]: https://ponyfoo.com/articles/es6-arrow-functions-in-depth "ES6 Arrow Functions on Pony Foo"
[6]: https://ponyfoo.com/articles/es6-spread-and-butter-in-depth "ES6 Spread and Butter on Pony Foo"
[7]: https://ponyfoo.com/articles/es6-object-literal-features-in-depth "ES6 Object Literal Features in Depth on Pony Foo"
[8]: https://ponyfoo.com/articles/es6-classes-in-depth "ES6 Classes in Depth on Pony Foo"
[9]: https://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth "ES6 Let, Const, and the 'Temporal Dead Zone' (TDZ) in Depth on Pony Foo"
[10]: https://ponyfoo.com/articles/es6-iterators-in-depth "ES6 Iterators in Depth on Pony Foo"
[11]: https://ponyfoo.com/articles/es6-generators-in-depth "ES6 Generators in Depth on Pony Foo"
[12]: https://ponyfoo.com/articles/es6-symbols-in-depth "ES6 Symbols in Depth on Pony Foo"
[13]: https://ponyfoo.com/articles/es6-maps-in-depth "ES6 Maps in Depth on Pony Foo"
[14]: https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth "ES6 WeakMaps, Sets, and WeakSets in Depth on Pony Foo"
[15]: https://ponyfoo.com/articles/es6-proxies-in-depth "ES6 Proxies in Depth on Pony Foo"
[16]: https://ponyfoo.com/articles/es6-proxy-traps-in-depth "ES6 Proxy Traps in Depth on Pony Foo"
[17]: https://ponyfoo.com/articles/more-es6-proxy-traps-in-depth "More ES6 Proxy Traps in Depth on Pony Foo"
[18]: https://ponyfoo.com/articles/es6-reflection-in-depth "ES6 Reflection in Depth on Pony Foo"
[19]: https://ponyfoo.com/articles/es6-number-improvements-in-depth "ES6 Number Improvements in Depth on Pony Foo"
[20]: https://ponyfoo.com/articles/es6-math-additions-in-depth "ES6 Math Additions in Depth on Pony Foo"
[21]: https://ponyfoo.com/articles/es6-array-extensions-in-depth "ES6 Array Extensions in Depth on Pony Foo"
[22]: https://ponyfoo.com/articles/es6-object-changes-in-depth "ES6 Object Changes in Depth on Pony Foo"
[23]: https://ponyfoo.com/articles/es6-strings-and-unicode-in-depth "ES6 Strings (and Unicode, ❤) in Depth"
[24]: https://ponyfoo.com/articles/es6-modules-in-depth "ES6 Modules in Depth on Pony Foo"
[25]: https://ponyfoo.com/articles/a-brief-history-of-es6-tooling "A Brief History of ES6 Tooling on Pony Foo"
[26]: https://ponyfoo.com/articles/gulp-grunt-whatever "Gulp, Grunt, Whatever on Pony Foo"
[27]: https://ponyfoo.com/articles/javascript-variable-hoisting "JavaScript Variable Hoisting on Pony Foo"
[28]: https://msdn.microsoft.com/en-us/library/system.idisposable%28v=vs.110%29.aspx?f=255&MSPPError=-2147217396 "IDisposable on MSDN"
[29]: https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth#es6-weakmaps "ES6 WeakMaps, Sets, and WeakSets in Depth on Pony Foo"
[30]: https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth#es6-sets "ES6 WeakMaps, Sets, and WeakSets in Depth on Pony Foo"
[31]: https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth#es6-weaksets "ES6 WeakMaps, Sets, and WeakSets in Depth on Pony Foo"
[32]: https://ponyfoo.com/articles/es6-promises-in-depth "ES6 Promises in Depth"
[33]: http://bevacqua.github.io/promisees/ "Promisees — Promise visualization playground for the adventurous"
[34]: https://github.com/petkaantonov/bluebird "petkaantonov/bluebird on GitHub"
[35]: https://promisesaplus.com/ "An open standard for sound, interoperable JavaScript promises"
[36]: https://ponyfoo.com/articles/tagged/es6-in-depth "ES6 in Depth on Pony Foo"
[37]: http://patreon.com/bevacqua "My Patreon Account"
[38]: https://en.wikipedia.org/wiki/Konami_Code

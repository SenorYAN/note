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
* 你也可以在插入变量中使用合理的js表达，例如such as `` `${2 * 3}` `` or `` `${foo()}` ``
* 你也可以用标签模版来改变插入的js表达
	* 在模版字符串前面 加一个前缀，``fn`foo, ${bar} and ${baz}` ``

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

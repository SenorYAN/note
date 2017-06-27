# ES6 Overview in 350 Bullet Points
[本文原地址](https://github.com/bevacqua/es6) ，此处仅是翻译
## Introduction
* ES6 — 也通常被熟知为Harmony，es-next，ES2015 — 目前这种语言最新规范（现在已经不是最新了）
* ES6是2015年6月发布的规范
* 未来版本的规范命名将以ES[YYYY]的形式，例如：ES2016代表ES7
	*  每次发布一次，功能不削减
	* ES6我们还称它ES6
	* 从ES2016（ES7）开始，我们开始用ES[YYYY]的方式给新版本命名
	* 命名方案的主要原因是迫使浏览器供应商快速实现最新功能

## Tooling
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

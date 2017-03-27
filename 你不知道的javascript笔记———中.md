# 你不知道的javascript笔记———中
## 1、类型和语法
* 判断类型用Object.prototype.toString.call(?????) = ‘[object   ??? ]’判断
* 全局命名空间中不存在变量，iife

## 2、数值
* arguments类数组
```javascript
funcation foo(){
 		//es5
		var arr = [].slice.call(arguments);
		//es6
		let arr = [... arguments];
		let arr = Array.from(arguments);
}
```
* 数组可变化，字符串不可以
如果要把一个字符串倒置
```javascript
var str = 'asdfghj';

//错误做法
Array.prototype.reverse.call(str);
//正确做法
str.split("").reverse().join("");
```
* js的数字是IEEE754双精度浮点数，64位二进制
```javascript
toExponential()//科学计数法显示
toPrecision()//有效数字保留指定位数
tpFixed()//小数部分保留指定位数
//es6
Number.EPSILON = Math.pow(2,-52)//机器精度，小于这个视为相等
Number.MAX_SAFE_INTEGER/Number.MIN_SAFE_INTEGER = +/-(Math.pow(2,53)-1) //整数安全范围
Number.isInteger()//是否为整数，相当于num%1 == 0？
```
* void运算符，可以不让表达式返回任何结果
* NaN，大意是不是数字的数字，类型还是number，但是自身不相等，用Number.isNaN检测（es6），之前的有bug，必须同时判断类型是否是number，或者判断自不等
* es6使用Object.is判断两个值是否完全相等
* 简单值（基本值）通过值复制来传递，复合值通过引用赋值茶传递，js中的引用不能指向变量，只能指向值。

## 3、原生函数
* 创建undefined数组
```javascript
Array.apply(null, {length:3})
```
* Array.prototype = [“”]
Function.prototype = 空函数
RegExp.prototype = “_(?:)_”
```javascript
function(){
	vals = vals || Array.prototype;
	fn = fn || Function.prototype;
	rx = rx || RegExp.prototype;
}
//使用prototype不用[]、function(){}、／(?:)／能节约cpu和内存
```

## 4、强制类型转换
* JSON.stringify在对象中遇到undefined、function、symbol自动将其忽略，在数组中返回null
```javascript
	   JSON.stringify( undefined );     JSON.stringify( function(){} );     JSON.stringify(        [1,undefined,function(){},4]     );     JSON.stringify(	      { a:2, b:function(){} }
	   );
```
JSON.stringify可以通过toJSON方法自定义
JSON.stringify(obj,  replcaer,  space)
* ToNumber通过检查对象有没有valueOf和toString方法，有的话就强制转换，没有就返回typeError
* 字符串和数字之间的显式转换
* ～～用于去掉小数部分
* Number方法可以转换带有非数字的，parseInt不行，会返回NaN，parseInt的参数只能是字符串，parseInt的第二个参数是确定返回数字的进制的。
```javascript
parseInt(1/0, 19) = 18; => I
//19进制有效数字：0123456789ABCDEFGHI，I=18
parseInt(0.000008) = 0; => 0.000008
parseInt(0.0000008) = 8; => 8e-7
parseInt(false, 16) = 250;  =>fa
```
* ||和&&，
```javascript
a && b; //a是真的才会执行b
a || b; //a不是真的才会执行b
```
* symbol类型不能通过+‘’变字符串，只能用String()方法
* null和undefined在==的范畴上相等* 我们要对 == 两边的值认真推敲，以下两个原则可以让我们有效地避免出错。如果两边的值中有 true 或者 false，千万不要使用 ==。如果两边的值中有 []、"" 或者 0，尽量不要使用 ==。

## 5、语法
* { }的用途
1、对象常量
2、代码块
* continue foo & break foo，前者是执行下一轮foo循环，后者是跳出foo所在循环／代码块
* 解构赋值，相同结构／模式的匹配赋值
* 运算符优先级：“，”最低； && 高于 ||， &比=高，&& > || > ?:
* 短路：&& 和 || 在从左边操作数判断结果的情况下可以不判断右边
* ES5-Shim(https://github.com/es-shims/es5-shim) 是 一 个 完 整 的 shim_polyfill 集合，能够为你的项目提供 ES5 基本规范支持。同样，ES6-Shim(https:_/ github.com/es-shims/es6-shim)提供了对 ES6 基本规范的支持。虽然我们可 以通过 shim/polyfill 来填补新的 API，但是无法填补新的语法。可以使用 Traceur(https://github.com/google/traceur-compiler/wiki/GettingStarted) 这 样 的工具来实现新旧语法之间的转换。

## 6、异步
* Promise具体ES6-promise
* Promise

## 7、生成器 
* 基本语法
```javascript
/*此处“*”的位置不限定，可以”function *foo“ 也可以”function*foo“ */
		function *foo(x) {          var y = x * (yield);  //暂停          return y;      }      var it = foo( 6 );		//启动foo(..) 
		it.next();      var res = it.next( 7 );      res.value; //42
```

* yield能返回一个值并输出
* next方法将暂停的函数进行下一步
* for of 遍历和Symbol.iterator修改默认遍历
```javascript
var a = [1,3,5,7,9];
a[Symbol.iterator] = function*() {
		for(var key in this){
			yield this[key] * 2;
		}
}
for(var v of a){
	console.log(v); //2,6,10,14,18
}
```
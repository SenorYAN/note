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

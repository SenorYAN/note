# js-lesson的笔记
## 1、变量和数据类型
* 0做分母，分子是0则返回NaN，分子不是0则返回无穷
``` javascript
console.log(typeof (0 / 0));    // "number" 
```
* Number（）和parseInt（），前者转换非全数字返回NaN，后者返回数字部分
```javascript
console.log(Number("1234S"));   // NaN
console.log(parseInt("1234S")); // 1234
console.log(parseInt("1234S234")); // 1234
```

## 2、表达式和运算符
* typeof、delete、void是一元运算符，比一般运算符号等级高
* 逗号运算符多用于声明多个变量；但除此之外，逗号运算符还可以用于赋值。在用于赋值时，逗号运算符总会返回表达式中的最后一项，如下面的例子所示：
```javascript
	var num = (5, 1, 4, 8, 0); // num 的值为 0
```
* + - + - + 
```javascript
	console.log(1 + - + + + - + 1); //2
	console.log(1 + 0 - 0 + 0 + 0 + 0 - 0 + 1); //2
```
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

## 3、对象
* delete操作符，删除不存在的属性不会报错
* hasOwnPorperty(属性)只能判断是否是自有属性，in会检查是否是自由属性或者原型链中
* Object.assign() ，必须是自由属性
* Object.defineProperty(obj, 属性)
* Object.getOwnPropertyName/Descript(obj, 属性,)

## 4、数组
* filter方法，参数为function，筛选符合某种条件的数组元素，每一项通过是否返回true判断是否择掉
```javascript
var arr = [5,3,4,2,3,5,6,4,3,2];
var unique = arr => {
    var res ={};
    return arr.filter(n => {
        res[n] = (res[n]||0) +1;
        return res[n] < 2;
    }).sort((a,b) => a-b);
}
console.log(unique(arr)); // [2,3,4,5,6]
```
* splice返回的是被删除的部分！
* reduce方法迭代！
```javascript
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( acc, cur ) => acc.concat(cur),
  []
);
```
* apply函数的参数二是个数组，里面每一个元素将作为方法的参数
```javascript
	Array.prototype.concat.apply([], arr)
	//将arr里面的每个元素concat到[]
```
* Object.toString().call()来判断类型
```javascript
console.log(toString.call([123]));//[object Array]  
console.log(toString.call('123'));//[object String]  
console.log(toString.call({a: '123'}));//[object Object]  
console.log(toString.call(/123/));//[object RegExp]  
console.log(toString.call(123));//[object Number]  
console.log(toString.call(undefined));//[object Undefined]  
console.log(toString.call(null));//[object Null]   
```

## 5、函数
* arguments不是Array，但是类似Array，但是可以通过slice的方法来转换成数组
```javascript
Array.prototype.slice.call(arguments)
```
* 匿名函数递归arguments.callee
```javascript
var arr = [2,3,4,[2,3,[2,3,4,2],5],3,5,[2,3,[2,3,4,2],2],4,3,6,2];
const unique = arr => {
    // 待实现方法体
    let res = {};
    return (foo = n => {
        return n.reduce((a, b) => {
            return a.concat(Object.prototype.toString.call(b) === '[object Array]' ? foo(b) : b)
        },[])
    })(arr).filter(n => {
        res[n] = (res[n]||0) +1;
            return res[n] < 2;
        }).sort((a,b) => a-b);
}
console.log(unique(arr)); // [2,3,4,5,6]
```

## 6、基本包装类型
* 基本类型值不是对象，理应不该有方法，但是定义时会对之进行包装，当第二行代码访问 s1 时，访问过程处于一种读取模式，也就是要从内存中读取这个字符串的值。而在读取模式中访问字符串时，后台都会自动完成下列处理。
1、创建 String 类型的一个实例；
2、在实例上调用指定的方法；
3、销毁这个实例。
```javascript
/*表面上*/
var s1 = "some text";
var s2 = s1.substring(2);

/*实际上*/
var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;
```
布尔值和数字同样适用。

* 引用类型与基本包装类型的主要区别就是对象的生存期。使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法。来看下面的例子：

```javascript
var s1 = "some text";
s1.color = "red";
console.log(s1.color);   // undefined
```

* 基本类型值&构造函数值
基本类型—》typeof返回此类型—》instanceof返回false
构造类型—》typeof返回object—》instanceof返回true
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

## 7、单体内置对象
```javascript
var uri = "http://shijiajie.com/illegal value.htm#start";

console.log(encodeURI(uri));
// "http://shijiajie.com/illegal%20value.htm#start"

console.log(encodeURIComponent(uri));
// "http%3A%2F%2Fshijiajie.com%2Fillegal%20value.htm%23start"
```
* 使用 encodeURI() 编码后的结果是除了空格之外的其他字符都原封不动，只有空格被替换成了 %20。而 encodeURIComponent() 方法则会使用对应的编码替换所有非字母数字字符。这也正是可以对整个 URI 使用 encodeURI()，而只能对附加在现有 URI 后面的字符串使用 encodeURIComponent() 的原因所在。
* eval方法接受一个字符串，解析成要执行的命令语句
* Math的方法：floor舍去、ceil进位，round四舍五入，random返回一个大于等于0小于1的小数
* 高效取某范围内不重复的数字
假设取50个100范围内的不重复随机数，思路分析：

第1步，为数组的每个数字按其位置（数组的下标）赋值，我们获得一个 100个数字、顺序排列 的数组。

第2步，开始取 i-99 范内的随机数，把每次取到的随机数作为位置（数组的下标）与位置（数组的下标）为 i 的数交换数值。这样做的意义是，将已经取到的随机数在取值范围中排除，下一次仅会在剩下的数字中取随机数。

第2步不太容易理解，举个栗子：假设第一次取到的随机数是39，把 位置39的数 与 位置0的数 交换之后，再从 位置1 开始看该数组，你会惊奇的发现，剩下的是0-99除39以外的所有数字，但它们的位置是1-99，接下来我们仅需要从1-99中取一个随机数，作为数组下标，即可在剩下的数字中取随机数了，以此类推。

## 8、BOM
* BOM（浏览器对象模型）以 window 对象为依托，表示浏览器窗口以及页面可见区域。同时，window 对象还是 ECMAScript 中的 Global 对象，因而所有全局变量和函数都是它的属性，且所有原生的构造函数及其他函数也都存在于它的命名空间下。本章讨论了下列 BOM 的组成部分。

在使用框架时，每个框架都有自己的 window 对象以及所有原生构造函数及其他函数的副本。每个框架都保存在 frames 集合中，可以通过位置或通过名称来访问。
有一些窗口指针，可以用来引用其他框架，包括父框架。
top 对象始终指向最外围的框架，也就是整个浏览器窗口。
parent 对象表示包含当前框架的框架，而 self 对象则回指 window。
使用 location 对象可以通过编程方式来访问浏览器的导航系统。设置相应的属性，可以逐段或整体性地修改浏览器的 URL。
调用 replace() 方法可以导航到一个新 URL，同时该 URL 会替换浏览器历史记录中当前显示的页面。
navigator 对象提供了与浏览器有关的信息。到底提供哪些信息，很大程度上取决于用户的浏览器；不过，也有一些公共的属性（如 userAgent）存在于所有浏览器中。
BOM中还有两个对象：screen 和 history，但它们的功能有限。screen 对象中保存着与客户端显示器有关的信息，这些信息一般只用于站点分析。history 对象为访问浏览器的历史记录开了一个小缝隙，开发人员可以据此判断历史记录的数量，也可以在历史记录中向后或向前导航到任意页面。

## 9 、DOM
* DOM 是语言中立的 API，用于访问和操作 HTML 和 XML 文档。DOM1 级将 HTML 和 XML 文档形象地看作一个层次化的节点树，可以使用 JavaScript 来操作这个节点树，进而改变底层文档的外观和结构。

* 最基本的节点类型是 Node，用于抽象地表示文档中一个独立的部分；所有其他类型都继承自 Node。
Document 类型表示整个文档，是一组分层节点的根节点。在 JavaScript 中，document 对象是 Document 的一个实例。使用 document 对象，有很多种方式可以查询和取得节点。
Element 节点表示文档中的所有 HTML 或 XML 元素，可以用来操作这些元素的内容和特性。
另外还有一些节点类型，分别表示文本内容、注释、文档类型、CDATA 区域和文档片段。
访问 DOM 的操作在多数情况下都很直观，不过在处理 <script> 和 <style> 元素时还是存在一些复杂性。由于这两个元素分别包含脚本和样式信息，因此浏览器通常会将它们与其他元素区别对待。这些区别导致了在针对这些元素使用 innerHTML 时，以及在创建新元素时的一些问题。

* 理解 DOM 的关键，就是理解 DOM 对性能的影响。DOM 操作往往是 JavaScript 程序中开销最大的部分，而因访问 NodeList 导致的问题为最多。NodeList 对象都是“动态的”，这就意味着每次访问 NodeList 对象，都会运行一次查询。有鉴于此，最好的办法就是尽量减少 DOM 操作。
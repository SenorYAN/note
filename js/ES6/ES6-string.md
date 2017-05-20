# ES6-string
## 字符串遍历接口
* ES6为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
```javascript
for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"
```

## includes(), startsWith(), endsWith()
* 传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。

* includes()：返回布尔值，表示是否找到了参数字符串。
* startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
* endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
```javascript
var s = 'Hello world!';

s.startsWith('world', 6) // true，从第7个开始找
s.endsWith('Hello', 5) // true，前5个字符
s.includes('Hello', 6) // false，从第7个开始找
```

## repeat()
repeat方法返回一个新字符串，表示将原字符串重复n次。

## padStart()，padEnd()
* ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。
```javascript
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
```

* 另一个用途是提示字符串格式。
```javascript
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```

## 模版字符串
· xxxxx   ${data}  xxxxxxx·
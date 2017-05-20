# ES6-Set & Map
## Set 
* Set类似于数组，但是成员都唯一，可以遍历数组用add方法达到去重目的
* Set 函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化
* Set加入值时不发生类型转换 ，Set内部两个NaN看作相等，两个对象总是不相等
* Set 的实例方法
Set 结构的实例有以下属性：
> Set.prototype.constructor：构造函数，默认就是Set函数。  
> Set.prototype.size：返回Set实例的成员总数。（注意不是length）  
Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法：
> add(value)：添加某个值，返回Set结构本身。  
> delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。  
> has(value)：返回一个布尔值，表示该值是否为Set的成员。  
> clear()：清除所有成员，没有返回值。  
* Array.from方法能把set转换成数组

### Set的遍历
* Set 结构的实例有四个遍历方法，可以用于遍历成员。
> keys()：返回键名的遍历器  
> values()：返回键值的遍历器  
> entries()：返回键值对的遍历器  
> forEach()：使用回调函数遍历每个成员  
```javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

* 使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
```

* WeakSet：成员只能是对象
WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

## Map
* 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
* Map的构造函数接受一个数组为参数，该数组的成员是一个个表示键值对的数组。
```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```
* 事实上，不仅仅是数组，任何具有 Iterator 接口的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数。这就是说，Set和Map都可以用来生成新的 Map。

### 实例属性和方法
* size属性返回 Map 结构的成员总数。
* set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
* get方法读取key对应的键值，如果找不到key，返回undefined。
* has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
* delete方法删除某个键，返回true。如果删除失败，返回false。
* clear方法清除所有成员，没有返回值。

### 遍历方法
* Map 结构原生提供三个遍历器生成函数和一个遍历方法。
> keys()：返回键名的遍历器。  
> values()：返回键值的遍历器。  
> entries()：返回所有成员的遍历器。  
> forEach()：遍历 Map 的所有成员。  
需要特别注意的是，Map 的遍历顺序就是插入顺序。
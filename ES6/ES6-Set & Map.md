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
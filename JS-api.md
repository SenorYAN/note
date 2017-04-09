# JS-api
## 变量
undefined表示变量不含有值，变量设置成null视作清空变量。
## 对象
### 函数
* Object.**assign**(target, ...sources )
把一个或多个来源对象的 _可枚举_ 属性复制到目标对象
* Object.**create**(prototype, descriptors)
根据指定的原型对象和属性生成一个对象
* Object.**defineProperty**()
给对象增加或修改一个属性
* Object.**defineProperties**()
给对象增加或修改一系列对象
* Object.**entries**() 
返回一个对象可枚举属性[key, value]值组的数组
* Object.**freeze**()
冻结一个对象，不能删除和修改任何属性
* Object.**getOwnPropertyDescriptor**(object, propertyname)
获取指定对象的自身属性描述符。自身属性描述符是指直接在对象上定义（而非从对象的原型继承）的描述符。
* Object.**getOwnPropertyDescriptors**()
获取指定对象所有的自身属性描述符。
* Object.**getOwnPropertyNames**()
返回一个数组，包含对象所有属性的名字，不管是否可枚举。从原型中继承的不行。
* Object.**getOwnPropertySymbols**()
返回一个数组包含对象所有的自有符号（Symbol）属性。
* Object.**getPrototypeOf**()
返回指定对象的原型。
* Object.**is** ()
比较两个值是否相同，类似于===，不会转换类型。
* Object.**isExtensible**()
检测一个对象是否可扩展（可添加新属性）。
* Object.**isFrozen**()
如果无法在对象中修改现有属性的特性和值，且无法向对象添加新属性，则返回 true。
* Object.**isSealed**()
如果无法在对象中修改现有属性的特性，且无法向对象添加新属性，则返回 true。
* Object.**keys**()
返回对象的可枚举属性和方法的名称。
* Object.**preventExtensions**()
阻止向对象添加新的属性。
* Object.**seal**()
阻止修改属性，并组织添加新属性
* Object.setPrototypeOf()
设置一个对象的原型，可用此方法进行原型继承
* Object.**values**() 
Returns an array of a given object's own enumerable values.
返回一个对象，包含对象自身的可枚举值，不返回keys

### 方法
* object.**hasOwnProperty**(proName)
确定某个对象是否有指定名称的属性，返回布尔值
* someObject.prototype.**isPrototypeOf**(object)
判断一个对象在不在对一个对象的原型链中
* object. **propertyIsEnumerable**(proName)
判断指定属性是否可枚举
* dateObj.**toLocaleString**() 
返回使用当前区域设置转换为字符串的日期。
* object.**valueOf**( )
返回指定对象的基元值。

## 数组
### 函数
* Array.**from**(类数组)
从类似数组的对象或可迭代的对象返回一个数组。
* Array.**isArray**(object) 
确定对象是否为数组。
* Array.**of**(element0[, element1][, ...][,elementN]);
从传入的参数返回一个数组。

### 方法
* array1.**concat**([item1[, item2[, . . . [, itemN]]]])
组合两个或者两个以上的数组，不改变原本的数组
* arrayObj.**entries**();
返回一个迭代器，他返回数组的[key，value]  对
* array1.**every**(callbackfn[, thisArg])
确定数组的所有成员是否满足指定测试。一旦遇到不符合条件的就停止。
* arrayObj.**fill**(value [ , start [ , end ] ]);
使用指定值填充数组
* array1.**filter**(callbackfn[, thisArg])
返回数组中的满足回调函数中指定的条件的元素
* arrayObj.**findIndex**(callbackfn [, thisArg]);
返回满足回调函数中指定的测试条件的第一个数组元素的索引值。
* array1.**forEach**(callbackfn[, thisArg])
为数组中的每个元素执行指定操作。
* array1.**indexOf**(searchElement[, fromIndex])
返回某个值在数组中的第一个匹配项的索引。注意fromIndex
* arrayObj.**join**([separator]) 
添加由指定分隔符字符串分隔的数组的所有元素。
* arrayObj.**keys**();
返回一个迭代器，它能返回数组的索引值。
* array1.**lastIndexOf**(searchElement[, fromIndex])
返回指定的值在数组中的最后一个匹配项的索引。
* array1.**map**(callbackfn[, thisArg])
对数组的每个元素调用定义的回调函数并返回包含结果的数组。
* arrayObj.**pop**( )
从数组中移除最后一个元素并返回该元素。

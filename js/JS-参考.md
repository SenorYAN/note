# JS-参考
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
* Object.**setPrototypeOf**()
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
* array1.**concat**([item1[, item2[, . . . [, itemN]]]]);
组合两个或者两个以上的数组，不改变原本的数组
* arrayObj.**entries**();
返回一个**迭代器**，他返回数组的[key，value]  对
* array1.**every**(callbackfn[, thisArg]);
确定数组的所有成员是否满足指定测试。一旦遇到不符合条件的就停止。
如果 callbackfn 函数为所有数组元素返回 true，则为 true；否则为 false。如果数组没有元素，则 every 方法将返回 true。
* arrayObj.**fill**(value [ , start [ , end ] ]);
使用指定值填充数组
* array1.**filter**(callbackfn[, thisArg]);
返回数组中的满足回调函数中指定的条件的元素
* arrayObj.**findIndex**(callbackfn [, thisArg]);
返回满足回调函数中指定的测试条件的第一个数组元素的索引值。
* array1.**forEach**(callbackfn[, thisArg])
为数组中的每个元素执行指定操作。callback最多接受三个参数。
* array1.**indexOf**(searchElement[, fromIndex])
返回某个值在数组中的第一个匹配项的索引。注意fromIndex
* arrayObj.**join**([separator]) ;
添加由指定分隔符字符串分隔的数组的所有元素。
* arrayObj.**keys**();
返回一个**迭代器**，它能返回数组的索引值。
* array1.**lastIndexOf**(searchElement[, fromIndex])
返回指定的值在数组中的最后一个匹配项的索引。
* array1.**map**(callbackfn[, thisArg]);
对数组的每个元素调用定义的回调函数并返回包含结果的数组。
* arrayObj.**pop**( );
从数组中移除最后一个元素并返回该元素。
* arrayObj.**push**([item1 [item2 [. . . [itemN ]]]])
将新元素追加到一个数组中，并返回新的数组长度。
* array1.**reduce**(callbackfn[, initialValue])
对数组中的所有元素调用指定的回调函数。该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。callback最多可以接受4个参数。
* array1.**reduceRight**(callbackfn[, initialValue])
按降序顺序对数组中的所有元素调用指定的回调函数。该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。
* arrayObj.**reverse**() 
反转数组，不新建数组！！！！
* arrayObj.**shift**( )
移除第一个元素并返回该元素
* arrayObj.**slice**(start, [end]) 
返回数组中的一部分，不改变原数组,如果 start 为负，则将其视为 length + start，其中 length 为数组的长度。如果 end 为负，则将其视为 length + end，其中 length 为数组的长度。
* array1.**some**(callbackfn[, thisArg])
检查元素符不符合条件，一个true就返回true
* arrayobj.**sort**(sortFunction) 
排序
* arrayObj.**splice**(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])
从一个数组中移除元素，如有必要，在所移除元素的位置上插入新元素，并返回所移除的元素。会修改原数组！！！
* array.**toString**()
返回数组的字符串表示形式。将 Array 的元素转换为字符串。结果字符串被连接起来，用逗号分隔。
* arrayObj.unshift([item1[, item2 [, . . . [, itemN]]]])
数组开头加入新元素
* array.**valueOf**()
返回指定对象的基元值。就是返回数组本身。
* arrayObj.**values**();
返回一个**迭代器**，它返回数组的值。

## 字符串
### 方法
* strObj. **charAt**(index)
返回指定索引位置处的字符。
* strObj. **charCodeAt**(index)
返回指定位置的字符的unicode值。
* stringObj.**codePointAt**(pos);
返回一个 Unicode utf-16 字符的码位。
* string1. **concat**([string2[, string3[, . . . [, stringN]]]])
返回由两个或两个以上的字符串串联而成的字符串。
* stringObj.**endsWith**(str, [, position]);
返回布尔值，该值指示字符串或子字符串是否以另一个指定字符串结尾。
* stringObj.**includes**(substring [, position]);
返回一个布尔值，该值指示传入字符串是否包含在字符串对象中。
* strObj. **indexOf**(subString[, startIndex])
返回子字符串首次出现的位置。
* strObj.**lastIndexOf**(substring[, startindex])
返回字符串中子字符串最后出现的位置。
* stringVar.**localeCompare**(stringExp[, locales][, options]) 
确定两个字符串在当前区域设置中是否相等。
* stringObj.**match**(rgExp) 
将字符串与正则表达式匹配，并返回一个包含该搜索结果的数组。
* stringObj.**normalize**([form]);
返回指定字符串的 Unicode 范式
* stringObj.**repeat**(count);
返回一个新的字符串对象，它的值等于重复了指定次数的原始字符串。
* stringObj. **replace**(rgExp, replaceText)
使用正则表达式或搜索字符串替换字符串中的文本。
* stringObj.**search**(rgExp) 
查找正则表达式搜索中第一个子字符串匹配项。
* stringObj.**slice**(start, [end]) 
返回字符串片段。
如果 start 为负，则将其视为 length + start，此处 length 为字符串的长度。如果 end 为负，则会将其视为 length + end。如果省略 end，则将一直复制到 stringObj 的结尾。如果 end 出现在 start 之前，则不会将任何字符复制到新字符串中。
* stringObj.**split**([separator[, limit]])
使用指定的分隔符将一个字符串拆分为多个子字符串，并将其以数组形式返回。
* stringObj.**startsWith**(str, [, position]);
返回一个值，该值指示字符串或子字符串是否以另一个指定字符串开头。
* stringvar.**substr**(start [, length ]) 
获取一个从指定位置开始并具有指定长度的子字符串。有点类似splice。
如果 length 为 0 或负数，则返回一个空字符串。如果没有指定该参数，则子字符串将延续到 stringvar 的结尾。
* strVariable. **substring**(start [, end])
返回位于 String 对象中的指定位置的子字符串。不包括end。
substring 方法使用 start 和 end 两者中的较小值作为子字符串的起始点。例如，strvar.substring(0, 3) 和 strvar.substring(3, 0) 将返回相同的子字符串。
如果 start 或 end 为 NaN 或负数，那么它将被替换为 0。
* stringVar.**toLocaleLower／UpperCase**( )
将所有字母字符都转换为小／大写形式，并考虑主机环境的当前区域设置。
* strVariable.**toLower／UpperCase**()
将字符串中的所有字母字符转换为小／大写形式。
* stringObj.**trim**()
从字符串中移除前导空格、尾随空格和行终止符。
* string.**toString**()
返回字符串的字符串表示形式。
* string.**valueOf**()
返回字符串。

## Element
* element.insertAdjacentHTML(position, text);
```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

* Element.classList
> add( String [, String] )  
> 添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略。  
> remove( String [,String] )  
> 删除指定的类值。  
> item ( Number )  
> 按集合中的索引返回类值。  
> toggle ( String [, force] )  
> 当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true。  
> 当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它  
> contains( String )  
> 检查元素的类属性中是否存在指定的类值。  
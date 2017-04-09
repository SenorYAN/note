# JS-api
## 变量
undefined表示变量不含有值，变量设置成null视作清空变量。
## 对象
* Object.assign(target, ...sources )
把一个或多个来源对象的 _可枚举_ 属性复制到目标对象
* Object.create(prototype, descriptors)
根据指定的原型对象和属性生成一个对象
* Object.defineProperty()
给对象增加或修改一个属性
* Object.defineProperties()
给对象增加或修改一系列对象
* Object.entries() 
返回一个对象可枚举属性[key, value]值组的数组
* Object.freeze()
Freezes an object: other code can't delete or change any properties.
冻结一个对象，不能删除和修改任何属性
* Object.getOwnPropertyDescriptor(object, propertyname)
获取指定对象的自身属性描述符。自身属性描述符是指直接在对象上定义（而非从对象的原型继承）的描述符。
* Object.getOwnPropertyDescriptors()
Returns an object containing all own property descriptors for an object.
* Object.getOwnPropertyNames()
Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
* Object.getOwnPropertySymbols()
Returns an array of all symbol properties found directly upon a given object.
* Object.getPrototypeOf()
Returns the prototype of the specified object.
* Object.is()
Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
* Object.isExtensible()
Determines if extending of an object is allowed.
* Object.isFrozen()
Determines if an object was frozen.
* Object.isSealed()
Determines if an object is sealed.
* Object.keys()
Returns an array containing the names of all of the given object's own enumerable properties.
* Object.preventExtensions()
Prevents any extensions of an object.
* Object.seal()
Prevents other code from deleting properties of an object.
* Object.setPrototypeOf()
Sets the prototype (i.e., the internal [[Prototype]] property)
* Object.values() 
Returns an array of a given object's own enumerable values.

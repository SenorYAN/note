# Node.js - api
# Assert（断言）
* assert(value[, message])
	* assert.ok() 的别名。
* assert.deepEqual(actual, expected[, message])
	* 测试 actual 参数与 expected 参数是否深度相等。 原始值使用 相等运算符（==）比较。
* assert.deepStrictEqual(actual, expected[, message])
	* 原始值使用 全等运算符（===）比较。 对象的 原型 也使用 全等运算符 比较。
* assert.doesNotThrow(block[, error][, message])
	* 如果抛出错误且错误类型与 error 参数指定的相同，则抛出 AssertionError。 如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者
* assert.equal(actual, expected[, message])
	* 使用“==”比较
	* 如果两个值不相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息
* assert.fail(message) / assert.fail(actual, expected, message, operator)
	* 抛出 AssertionError。 如果 message 不存在，则错误信息会被设为 actual 的值加分隔符 operator 再加 expected 的值。 否则，错误信息为 message 的值
* assert.ifError(value)
	* 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数
* assert.notDeepEqual(actual, expected[, message])
	* 测试是否不深度相等。 与 assert.deepEqual() 相反
* assert.notDeepStrictEqual(actual, expected[, message])
	* 测试是否不深度全等。 与 assert.deepStrictEqual() 相反
* assert.notEqual(actual, expected[, message])
	* 使用 不等运算符（!=）测试是否不相等。
* assert.notStrictEqual(actual, expected[, message])
	* 使用 不全等运算符（!==）测试是否不全等。
* assert.ok(value[, message])
	* 测试 value 是否为真值。 相当于 assert.equal(!!value, true, message)。
* assert.strictEqual(actual, expected[, message])
	* 使用 全等运算符（===）测试是否全等。
* assert.throws(block[, error][, message])
	* 期望 block 函数抛出错误。如果指定了 error，error 可以是构造函数、正则表达式、或自定义的验证函数。如果指定了 message，则当 block 不抛出错误时，message 会作为 AssertionError 的错误信息。
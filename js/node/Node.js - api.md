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

# HTTP
* http
	* 接收到的原始消息头保存在 rawHeaders 属性中，它是一个 [key, value, key2, value2, ...] 数组
* http.Agent 类
	* 负责为 HTTP 客户端管理连接的持续与复用，维护着一个等待请求的队列，且为每个请求重复使用一个单一的 socket 连接直到队列为空，此时 socket 会被销毁或被放入一个连接池中，在连接池中等待被有着相同主机与端口的请求再次使用。 是否被销毁或被放入连接池取决于 keepAlive 选项
* 待续

# URL
* auth
	* url的用户名和密码部分
* hash
	* url碎片部分，包含#
* host
	* url主机部分，包含端口
* hostname
	* 不包括port的host的小写主机名部分
* href
	* 整个url
* path
	* pathname+search
* pathname
	* 包含url的整个路径部分
* port
	* 端口
* protocol
	* 小写的协议体制
* query
	* 不包含？的查询字符串，这个属性是字符串还是对象由`url.parse()` 的`parseQueryString`参数决定
* search
	* 包含？的查询字符串
* slashes
	* 布尔值，如果 protocol 中的冒号后面跟着两个 ASCII 斜杠字符（/），则值为 true
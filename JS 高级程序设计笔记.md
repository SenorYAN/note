# JS 高级程序设计笔记
第1-2章
1、延迟脚本
defer属性
	defer属性只适用于外部脚本文件，ie8以后的浏览器完全忽略defer属性。延迟脚本应该放在页面底部。
async属性
	async属性也只适用于外部脚本文件，让浏览器立即下载文件。异步脚本一定会在页面load事件之前执行。

总结：
script按照页面顺序加载（在不使用defer和async属性的情况下），浏览器先解析不使用defer属性的script，defer属性可以让脚本在文档加载完毕之后执行，async属性表示当前版本不必等待其他脚本，不阻塞dom。

第3章
1、
未经初始化的变量会自动赋予undefined
未声明的变量typeof的结果也是undefined
2、严格模式下八进制字面值无效
3、NAN与任何值不相等包括他自己
4、转成数字的函数
Number（）适用于一切数据类型，
parseInt（）和parseFloat（）适用于字符串转数值
避免转换错误，paseint可以带第二个参数
parsefloat忽略前导0
5、关于操作符
～取反-1
～～快速去掉小数部分
！！转换成boolean值
&& 判断存不存在
利用逻辑或||避免变量赋值null或者undefined
，逗号操作符返回表达式中的最后一项


第4章
1、null 是object
2、instanceof 判断类型限对象
3、with try语句延长作用域链

第5章
1、function是对象
2、布尔表达式中所有对象都会被转为true

第6章
1、defineproperty 方法配置属性类型（可配置？可枚举？可写？值）；一旦定义成不可配置就不能改回来；
2、_xxxx; 下划线变量表示只能通过对象方法访问的属性
3、hasOwnProperty 方法检测属性是否存在实例中，同时hasOwnProperty 方法 和 in操作符确定存在于哪里
function hasPrototypeProperty（object， name）{
	return !object.hasOwnProperty(name) && (name in object)
}
4、实例和原型中具有同名属性时，实例属性会覆盖原型属性

第七章
1、闭包
2、变量提升
3、chrome的window.innerHeight无效，用document.documentElement.clientHeight

第八章
1、location..assign(url) == location.href=url == window.location = url  打开新页面
2、location.replace(url)  打开新页面 禁用返回 历史记录无记录

第十章
第十一章
<!--[if lt IE 9]>
    <script src="html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

第二十三章
1、cookie个数限制
ff50, opera30, safari&chrome 无限制
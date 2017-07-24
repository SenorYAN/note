# Node-7day
# API
## Buffer
* 二进制数据类型
* 可以使用toString和字符串互相转换
* 可以直接用bin[index]修改buffer
* slice方法也不是返回新的Buffer而是返回指针
* 可以使用copy方法把Buffer复制过去
* 总之，Buffer将JS的数据处理能力从字符串扩展到了任意二进制数据


## Stream
* 当内存中无法一次装下需要处理的数据时，或者一边读取一边处理更加高效时，我们就需要用到数据流。NodeJS中通过各种Stream来提供对数据流的操作
* Writable 和 Readable 流都会将数据存储到内部的缓存（buffer）中。这些缓存可以 通过相应的 writable._writableState.getBuffer() 或 readable._readableState.buffer来获取
* 当可读流的实现调用 stream.push(chunk) 方法时，数据被放到缓存中。如果流的消费者 没有调用 stream.read() 方法， 这些数据会始终存在于内部队列中，直到被消费


## File System（文件系统）
NodeJS通过fs内置模块提供对文件的操作。fs模块提供的API基本上可以分为以下三类：
* 文件属性读写。
其中常用的有fs.stat、fs.chmod、fs.chown等等。
* 文件内容读写。
其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等。
* 底层文件操作。
其中常用的有fs.open、fs.read、fs.write、fs.close等等。


## Path（路径）
* path.normalize
	* 将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠
* path.join
	* 将传入的多个路径拼接为标准路径。该方法可避免手工拼接路径字符串的繁琐，并且能在不同系统下正确使用相应的路径分隔符
* path.extname
	* 当我们需要根据不同文件扩展名做不同操作时，获得其扩展名
* path.basename(path[, ext])，返回path的最后一部分
* path.delimiter，提供平台特定的路径分隔符
* path.dirname(path)，返回一个 path 的目录名
* path.format(pathObject)，path.format() 方法会从一个对象返回一个路径字符串。 与 path.parse() 相反。
	* 属性优先级：dir > root，base > ext & name
* path.isAbsolute(path)，会判定 path 是否为一个绝对路径
* path.parse(path)，返回一个对象，对象的属性表示 path 的元素 
* path.relative(from, to)，返回从 from 到 to 的相对路径（基于当前工作目录）
* path.resolve([...paths])，把一个路径或路径片段的序列解析为一个绝对路径

## 网络操作
* HTTP可以作为两种方式使用，服务器和客户端
* HTTP请求本质是一个数据流，由headers和body组成
* 发送给服务器是按照从头到尾的顺序一个字节一个字节的数据流方式传递的
* http模块创建的服务器在接收到完整的请求头之后，就会调用回调函数
* request创建客户端发送请求，get请求不需要请求体，有便捷方法http.get()
* 客户端发送请求，拿到完整响应头之后，调用回调函数
* https比http要額外處理 SSL证书
* https比http创建服务器多一个options，key和cert字段指定了使用的私钥和公钥
* url.parse解析url字符串转换成url对象，并不一定是一个完整的url
* .parse方法还支持第二个和第三个布尔类型可选参数。第二个参数等于true时，该方法返回的URL对象中，query字段不再是一个字符串，而是一个经过querystring模块转换后的参数对象。第三个参数等于true时，该方法可以正确解析不带协议头的URL
* format方法把url对象转换成URL字符串
* resolve方法用于拼接字符串
* querystring实现url参数字符串与参数对象互换
* zlib提供了数据解压和压缩
* 判断accept-coding是否包括支持gzip
* zlib.gzip方法可以对数据压缩
* zlib.gunzip解压数据
* net模块用于创建socket
* 通过headers对象访问到的HTTP请求头或响应头字段不是驼峰
* http模块创建的HTTP服务器返回的响应是chunked传输方式
![](Node-7day/FFE9B9D7-180E-4DC5-B8ED-187A5D3D702E.png)


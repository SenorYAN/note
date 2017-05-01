# webpack的笔记
## 1、热更新
* 安装web pack-dev-server
* 设定webpack-dev-server伺服的directory。如果不进行设定的话，默认是在当前目录下。
```javascript
    module.exports = {
        entry: './src/js/index.js',
        output: {
            path: './dist/js',
            filename: 'bundle.js'，
            publicPath: '/assets/'
        }
    } 
```

那么，在index.html文件当中引入的路径也发生相应的变化:
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Demo</title>
    </head>
    <body>
        <script src="assets/bundle.js"></script>
		  <!--要是没有配publicPath就没有assets -->
    </body>
    </html>
```
* 分两种模式：iframe模式和inline模式
1、当使用Iframe mode时，请求_webpack-dev-server_index.html路径时，会返回client/index.html文件。
```javascript
//iframe的访问路径
`localhost:8080/webpack-dev-server/index.html。`
```
2、而Inline-mode，是webpack-dev-server会在你的webpack.config.js的入口配置文件中再添加一个入口,
`webpack-dev-server --inline --content-base ./dist`
`localhost:8080/index.html`

* html-webpack-plugin
关于html 中文件版本加hash号，基本配置：
```javascript
new HtmlWebpackPlugin({
            title: "This is the result",//文档标题，建议在模版里写
            filename: "./index.html",//build之后的文件名
            template: "./app/index.html",//模版地址
            inject: "body",//cript插入位置
            favicon: "",指定页面图标
            minify: {
                caseSensitive: false,//大小敏感与否
                collapseBooleanAttributes: true, //是否简写布尔值属性
                collapseWhitespace: true //是否除去空格
            },
            hash: true, //时候生成hash添加在文件末尾
            cache: true, //是否缓存，文件在改变时才会重新生成
            showErrors: true, //是否把错误信息写在页面里
            chunks: "",//在entry值设置多个js时，指定引入的js，不设置就是全部引入
            chunksSortMode: "auto",//引入模块的排序
            excludeChunks: "",//排除的模块
            xhtml: false//生成的模板文档中标签是否自动关闭，针对xhtml的语法，会要求标签都关闭，默认false
        })
```
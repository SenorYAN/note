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

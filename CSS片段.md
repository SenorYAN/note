# CSS片段
1、垂直居中：相对定位，top使得div下移50%，transform自身上移50%，或者用margin-top：-50%高
```
.verticalcenter{
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}

flex布局
.verticalcnter容器{
	align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; /*定义body的里的元素水平居中*/
}
```

2、CSS：表格列宽自适用
对于表格，当谈到调整列宽时，是比较痛苦的。然后，这里有一个可以使用的技巧：给td元素添加white-space: nowrap;能让文本正确的换行
```
td {
    white-space: nowrap;
}
```

3、包裹长文本
```
pre {
    white-space: pre-line;
    word-wrap: break-word;
}
```

 4、文字模糊
```
	 color: transparent;
   text-shadow: 0 0 5px rgba(0,0,0,0.5);
```

5、css动态省略号
```
.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis 2s infinite;
    content: "\2026"; /* ascii code for the ellipsis character */
}
@keyframes ellipsis {
    from {
        width: 2px;
    }
    to {
        width: 15px;
    }
}
```

 6、样式重制
```
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html { height: 101%; }/*防止高度滚动条页面抖动*/
body { font-size: 62.5%; line-height: 1; font-family: Arial, Tahoma, sans-serif; }
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong { font-weight: bold; } 
table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }
p { font-size: 1.2em; line-height: 1.0em; color: #333; }
```

7、css圆角
1. 不建议使用百分比，不是所有浏览器都支持。
2. 不分组时，设置1/2/3/4个值分别对应四个角，水平和竖直半径相同。
3. 分组时，第一组对应水平半径，第二组对应竖直半径。
4. 单个圆角使用border-top／bottom-left／right-radius设置，1～2个值，分别对应水平和竖直半径。
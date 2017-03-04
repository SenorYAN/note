# CSS片段
1. 垂直居中：相对定位，top使得div下移50%，transform自身上移50%，或者用margin-top：-50%高
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

2. CSS：表格列宽自适用

对于表格，当谈到调整列宽时，是比较痛苦的。然后，这里有一个可以使用的技巧：给td元素添加white-space: nowrap;能让文本正确的换行
```
td {
    white-space: nowrap;
}
```

3. 包裹长文本

```
pre {
    white-space: pre-line;
    word-wrap: break-word;
}
```
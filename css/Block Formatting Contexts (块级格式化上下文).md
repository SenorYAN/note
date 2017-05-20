# Block Formatting Contexts (块级格式化上下文)
## 触发BFC
满足下面任一条件的元素，会触发为 BFC ：

* 浮动元素，float 除 none 以外的值
* 绝对定位元素，position（absolute，fixed）
* display 为以下其中之一的值 inline-blocks，table-cells，table-captions
* overflow 除了 visible 以外的值（hidden，auto，scroll）

## BFC的特性
* 1、阻止margin合并
* 2、浮动撑开父元素
* 3、阻止浮动兄弟div覆盖自己
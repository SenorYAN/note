# Vue 的笔记 test
1. 生命周期
beforeCreate -> created -> beforeMount -> mounted -> (beforeUpdate -> updated )  -> beforeDestroy -> destroyed

![](Vue 的笔记/0E5AA78D-457D-433A-B641-21855C26BBA6.png)

2. 过滤器
{{message | filter }}
```
new Vue({
  // ...
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```
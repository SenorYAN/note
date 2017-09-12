```javascript
function kuohao(n) {
   // 存储所有的可能序列
    var first = {
        data: ['('],
        length: 1,
        left: n-1
    };
    var res = [first];
    function foo(obj) {
        if(obj.length){
            if(obj.left){
                var copy = JSON.parse(JSON.stringify(obj));
                copy.data.push(')');
                copy.length -= 1;
                res.push(copy);
                foo(copy);
                obj.data.push('(');
                obj.length += 1;
                obj.left -= 1;
                foo(obj);
            }else{
                for(var i=0;i<obj.length;i++){
                    obj.data.push(')');
                }
                obj.length = 0;
            }
        }else{
            if(obj.left){
                obj.data.push('(');
                obj.length += 1;
                obj.left -= 1;
                foo(obj);
            }else{
                return;
            }
        }
    }
    foo(first);
    return res;
}
kuohao(3).forEach(function(item) {
    console.log((item.data).join(''))
})
```
/**
 * Created by SenorYan on 2017/4/13.
 */
// 二分法
function binarySearch(arr, val) {
    var start = 0,
        end = arr.length-1,
        mid = 0,
        res = [],
        _arr = arr.map(function (e, i) {
            return {
                value: e,
                index: i
            }
        }).sort(function(a,b){
            return a.value - b.value
        });

    while(start <= end){
        mid = Math.floor((start + end) / 2);
        if(_arr[mid].value === val){
            res.push(_arr[mid].index);
            var flag1 = mid + 1, flag2 = mid -1;
            while(flag1 < end){
                if(_arr[flag1].value === val){
                    res.push(_arr[flag1].index);
                    flag1++;
                }else{
                    break;
                }
            }
            while(flag2 > start){
                if(_arr[flag2].value === val){
                    res.push(_arr[flag2].index);
                    flag2--;
                }else{
                    break;
                }
            }
            return res.sort(function(a,b){
                return a-b
            });
        }else if(_arr[mid].value > val){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}


console.log('二分法：', binarySearch([1,18,8,7,8,8,11,8,8,8,8,8],8));


//八大排序


//冒泡排序
function bubbleSort(arr) {
    arr.forEach(function(e, i){
        for(var j=0,length=arr.length; j<length-i; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    })

    return arr
}

console.log('冒泡排序：', bubbleSort([23,0,32,45,56,75,43,0,34]));


//简单选择排序
function simpleSelectSort(arr) {
    arr.forEach(function(e, i){
        var pos= i;
        for(var j=i+1, length=arr.length; j<length; j++){
            if(arr[pos] > arr[j]){
                pos = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;
    })
    return arr;
}

console.log('简单选择排序：', simpleSelectSort([23,0,32,45,56,75,43,0,34]));

//直接插入排序
function directInsertSort(arr) {
    arr.forEach(function(e, i){
        var key = arr[i];
        var j = i-1;
        while (j>-1 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    })
    return arr;
}

console.log('直接插入排序：', directInsertSort([23,0,32,45,56,75,43,0,34]));

//快速排序
function quickSort(arr) {
    if(arr.length <= 1) return arr;
    var mid = Math.floor(arr.length / 2);
    var midVal = arr.splice(mid, 1)[0];
    var left =[], right=[];
    arr.forEach(function(e, i){
        if(e < midVal){
            left.push(e);
        }else{
            right.push(e);
        }
    })
    return quickSort(left).concat([midVal], quickSort(right));
}

console.log('快速排序：', quickSort([23,0,32,45,56,75,43,0,34]));

// 希尔排序
function shellSort(arr) {
    //确定间隔
     var length = arr.length,
         h = 1;
     while(length/3 > h){
         h = 3*h+1;
     }
     while(h>=1){
         for(var i=h; i<length; i++){
             for(var j=i; j>=h && arr[j] < arr[j-h]; j-=h){
                 var temp = arr[j-h];
                 arr[j-h] = arr[j];
                 arr[j] = temp;
             }
         }
         h = (h-1)/3;
     }
     return arr;
}

console.log('希尔排序：', shellSort([23,0,32,45,56,75,43,0,34]));





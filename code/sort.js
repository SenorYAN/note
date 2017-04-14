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
    for(var i=0, length=arr.length; i<length; i++ ){
        var flag = true;
        for(var j=0; j<length-i; j++){
            if(arr[j] > arr[j+1]){
                flag = false;
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(flag){
            break;  //发现没有逆序大小，第二轮就不用排了
        }
    }
    return arr
}

console.log('冒泡排序：', bubbleSort([12,52,63,1,50,0,13,4,6,89]));


//简单选择排序
function simpleSelectSort(arr) {
    for(var i=0, length=arr.length; i<length; i++){
        var pos= i;
        for(var j=i+1; j<length; j++){
            if(arr[pos] > arr[j]){
                pos = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;
    }
    return arr;
}

console.log('简单选择排序：', simpleSelectSort([12,52,63,1,50,0,13,4,6,89]));



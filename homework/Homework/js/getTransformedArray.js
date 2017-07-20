function forEach(arr, fn) {
   for(var i=0; i<arr.length; i++){
        fn(arr[i], i, arr);
    }
}


function increment(num) {
    return num + 1;
}

function getTransformedArray(arr, fn) {
    var tempArr = [];
    forEach(arr, function(item, index, someArr) {
        tempArr.push(fn(item));
    });
    return tempArr;
    
}


console.log(getTransformedArray([1, 7, 20, 16, 25], increment));
function forEach(arr, fn) {
    for(var i=0; i<arr.length; i++){
        fn(arr[i], i, arr);
    }
}

forEach([3, 5, 2, 8, 5, 8], function (el) {
    console.log(el);
});
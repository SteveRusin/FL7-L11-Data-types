var presidents = [{
        name: 'George',
        surname: 'Kush'
    },
    {
        name: 'Barako',
        surname: 'Obaame'
    }];


function forEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}


function getTransformedArray(arr, fn) {
    var tempArr = [];
    forEach(arr, function (item, index, someArr) {
        tempArr.push(fn(item));
    });
    return tempArr;

}


function pluckByAttribute(arr, label) {
    return getTransformedArray(arr, function (obj) {
        for (var key in obj) {
            if (key === label) {
                return obj[key];
            }
        }
    });
}


console.log(pluckByAttribute(presidents, 'name'))
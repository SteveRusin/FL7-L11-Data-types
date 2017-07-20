var people = [
    {
        name: 'Bara',
        income: '1B'
      },
    {
        name: 'Dara',
        income: '5B'
      },
    {
        name: 'Kara',
        income: '1M'
      },
    {
        name: 'Zara',
        income: '2K'
      }
  ];

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

function getTopNRichestNames(num, arr) {
    var converteredArr = arr;
    converteredArr.map(function (el) {
        var income = el['income'].split('');
        var letter = income[1];
        if (letter === 'B') {
            income[1] = 1e9;
        } else if (letter === 'M') {
            income[1] = 1e6;
        } else if (letter === 'K') {
            income[1] = 1e3;
        }
        el['income'] = income[1] * income[0];
        return el;
    });
    i = 2
    var sorted = converteredArr.sort(function (a, b) {
        return a['income'] < b['income'];
    });

    return pluckByAttribute(sorted, 'name').slice(0, num);
}


console.log(getTopNRichestNames(2, people));
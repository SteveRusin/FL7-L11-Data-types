var charactersMap = {
    a: 'o',
    c: 'd',
    t: 'g'
};


function forEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}


function increment(num) {
    return num + 1;
}

function getTransformedArray(arr, fn) {
    var tempArr = [];
    forEach(arr, function (item, index, someArr) {
        tempArr.push(fn(item));
    });
    return tempArr;

}


function cypherPhrase(encoder, word) {
    var letters = word.split('');
    var resultArr = getTransformedArray(letters, function (el) {
        for (var key in encoder) {
            return encoder[el] || el;
        }
    });
    return resultArr.join('');
}


console.log(cypherPhrase(charactersMap, 'kitty cat'));
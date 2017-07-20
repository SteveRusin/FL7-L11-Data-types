var charactersMap = {
    a: 'o',
    c: 'd',
    t: 'g'
}

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


function cypherPhrase(encoder, word, fn) {
    var letters = word.split('');
    var resultArr = getTransformedArray(letters, function (el) {
        for (var key in encoder) {
            return encoder[el] || el;
        }
    });
    return resultArr.join('');
}



function decypherPhrase(decoder, word){
    var encoder = {};
    for(var key in decoder){
        encoder[decoder[key]] = key;
    }
    return cypherPhrase(encoder, word);
}


console.log(decypherPhrase(charactersMap, 'kiggy dog'));
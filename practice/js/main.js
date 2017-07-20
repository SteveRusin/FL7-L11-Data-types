var votes = ["angular", "angular", "react", "react", "react", "angular", "ember", "react", "vanilla"];
var vote = function (arr) {
    var votes = {};
    for (var i = 0; i < arr.length; i++) {
        if (votes[arr[i]]) {
            votes[arr[i]]++;
        } else {
            votes[arr[i]] = 1;
        }
    }
    return votes;
}
var result = vote(votes);
console.log(result);
// start coding your function here!
function find_max(arr) {
    var max = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//var array = [1, 78, 12, 2 , 5, 10];
//var array2 = [1, 2, 3, 3, -1];
//console.log(find_max(array2));
exports.find_max = find_max;
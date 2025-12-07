// 2635 - Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).
let map = function(arr, fn) {
    let newArr = [];
    arr.forEach((value, index) => {
        newArr.push(fn(value, index));
    });
    return newArr;
};

let arr = [1, 2, 3];

function multiplyByIndex(value, index) {
    return value * index;
}
console.log(map(arr, multiplyByIndex));
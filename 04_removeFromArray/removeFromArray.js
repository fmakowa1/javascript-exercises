const removeFromArray = function(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== n){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

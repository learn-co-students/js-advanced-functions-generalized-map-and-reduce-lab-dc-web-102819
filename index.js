// Add your functions here

function map(array, func) {
    let newArr = []
    array.forEach(function(item) {
        newArr.push(func(item));
    })
    return newArr;
};

function reduce(array, func, starter) {
    let reduction = starter;
    if (!!reduction) {
        array.forEach(function(item) {
            reduction = func(item, reduction)
        });
    } else {
        reduction = array[0];
        array.slice(1).forEach(function(item) {
            reduction = func(item, reduction)
        })
    }
    return reduction;
}
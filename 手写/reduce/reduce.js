Array.prototype.myReduce = function (cb, init) {
    const array = this;
    let total = init || array[0];
    for (let i = init? 0 : 1; i < array.length; i++) {
        total = cb(total, arr[i], i, arr);
    }
    return total;
}
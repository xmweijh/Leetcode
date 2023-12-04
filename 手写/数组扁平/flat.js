function flat(arr, depth = 1) {
    if (depth > 0) {
        return arr.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur)? flat(cur, depth - 1): cur);
        }, [])
    }
    return arr.slice();
}

console.log(flat([1,[2,3,[4,6]],5,7,[6,9]]))
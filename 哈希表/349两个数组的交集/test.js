var intersection = function (nums1, nums2) {
    const hash = {};
    let res = []
    for (let i of nums1) {
        hash[i] = 1;
    }
    for (let i of nums2) {
        if (hash[i]) {
            hash[i] = 0;
        }
    }
    for (let i in hash) {
        if (hash[i] === 0) {
            res.push(i);
        }
    }
    return res;
};

console.log(intersection([], []))
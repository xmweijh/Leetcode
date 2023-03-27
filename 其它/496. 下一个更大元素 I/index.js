/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums1.length).fill(-1)

    for(let i = 0; i < nums1.length; i++) {
        let j = 0
        for(j; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                break
            }
        }
        let k =j+1
        for(k; k<nums2.length; k++) {
            if(nums2[k] > nums2[j]) {
                res[i] = nums2[k]
                break
            }
        }
    }

    return res
};

let nums1 = [4,1,2], nums2 = [1,3,4,2]
console.log('nextGreaterElement', nextGreaterElement(nums1, nums2));
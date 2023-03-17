/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b)=> a-b)
    const n = nums.length;
    const m = queries.length;
    const presum = new Array(n).fill(0);
    const ans = new Array(m).fill(0);
    presum[0] = nums[0]
    for (let i = 1; i < n; i++) {
      presum[i] = presum[i - 1] + nums[i];
    }
    
    for (let i = 0; i < m; i++) {
      const q = queries[i];
      if(q<presum[0]) {
        ans.push[0]
        continue
      }
      let left = 0;
      let right = n;
      
      while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (presum[mid] <= q) {
          left = mid;
        } else {
          right = mid - 1;
        }
      }
      
      ans[i] = left+1;
    }
    
    return ans;
};

let nums = [2,3,4,5], queries = [1]
console.log(answerQueries(nums, queries))
/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
  
    let prod = 1;
    let left = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
      prod *= nums[i];
      
      while (prod >= k) {
        prod /= nums[left];
        left++;
      }
      
      count += i - left + 1;
    }
  
    return count;
};
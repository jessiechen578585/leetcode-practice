// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums: number[]): number {
    const counts = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++ ) {
        counts.set(nums[i]!, (counts.get(nums[i]!)?? 0) +1)
        if ((counts.get(nums[i]!)?? 0) > (nums.length/2)){
            return nums[i]!
        }
    }
    return 0;
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
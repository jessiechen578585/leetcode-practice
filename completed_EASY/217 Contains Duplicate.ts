// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true



function containsDuplicate(nums: number[]): boolean {
    let first = nums.shift();
    // console.log(first)
    while (first !== undefined) {
        if (nums.includes(first)) {
            return true;
        };
        first = nums.shift();
    }
    return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

// function containsDuplicate(nums: number[]): boolean {
//     return new Set(nums).size !== nums.length;
// }

// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
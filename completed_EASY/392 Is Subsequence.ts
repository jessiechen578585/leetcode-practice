// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


function isSubsequence(s: string, t: string): boolean {
    let i: number = 0;
    let j: number = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            // console.log(i, j)
            i = i + 1;
            j = j + 1;
        } else {
            // console.log(i, j)
            j = j + 1;
        }
    }   
    console.log(i)
    if (i == s.length){
        return true
    } else {
        return false
    }
};


console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))


// function isSubsequence(s: string, t: string): boolean {
//   let i = 0;
//   for (let j = 0; j < t.length && i < s.length; j++) {
//     if (s[i] === t[j]) i++;
//   }
//   return i === s.length;
// }
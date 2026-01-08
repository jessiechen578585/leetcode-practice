// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Start from the shortest string
  let prefix = strs.reduce((a, b) => (a.length < b.length ? a : b));

  for (const word of strs) {
    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // remove last char
      if (prefix === "") return "";
    }
  }
  return prefix;
}



// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))

console.log(longestCommonPrefix( ["a"]))

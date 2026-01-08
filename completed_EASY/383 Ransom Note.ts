// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


function canConstruct(ransomNote: string, magazine: string): boolean {
    for (const letter of ransomNote) {
        let found = false;
        for (let i = 0; i < magazine.length; i++) {

            if (magazine[i] === letter) {
                magazine = magazine.slice(0, i) + "" + magazine.slice(i + 1);
                found = true;
                break
            }
        }
        if (!found) {
            return false
        }
    }
    return true
};

// console.log(canConstruct("aa", "aab"))

// function canConstruct(ransomNote: string, magazine: string): boolean {
//   const count = new Map<string, number>();

//   // count letters in magazine
//   for (const ch of magazine) {
//     count.set(ch, (count.get(ch) ?? 0) + 1);
//   }

//   // use letters for ransomNote
//   for (const ch of ransomNote) {
//     const left = count.get(ch) ?? 0;
//     if (left === 0) return false;
//     count.set(ch, left - 1);
//   }

//   return true;
// }

// // tests
// console.log(canConstruct("a", "b"));    // false
// console.log(canConstruct("aa", "ab"));  // false
// console.log(canConstruct("aa", "aab")); // true

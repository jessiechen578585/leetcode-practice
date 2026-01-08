// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.



// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d


function func(w1: string, w2: string, word1longer: boolean): string {
    const word1len: number = w1.length;
    const word2len: number = w2.length;

    let newword: string = "";

    // console.log(w1, w2, word1longer)
    if (word1longer) {
        for (let y = 0; y < word2len; y++) {
            newword = newword + w1[y]
            newword = newword + w2[y]
        }
        newword = newword + w1.slice(word2len, word1len)
    } else {
        for (let y = 0; y < word1len; y++) {
            newword = newword + w1[y]
            newword = newword + w2[y]
        }
        newword = newword + w2.slice(word1len, word2len)
    }

    return newword
}


// function mergeAlternately(word1: string, word2: string): string {
//     const word1len: number = word1.length;
//     const word2len: number = word2.length;
//     let newword: string = "";

//     // word 1 is longer 
//     if (word1len > word2len) {
//         newword = func(word1, word2, true)
//         // word 2 is longer     
//     } else {
//         newword = func(word1, word2, false)
//     }

//     return newword
// };


function mergeAlternately(word1: string, word2: string): string {
    let i = 0;
    let j = 0;
    const out: string[] = [];

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            const char1 = word1[i]!;
            out.push(char1);
            i++;
        }
        if (j < word2.length) {
            const char2 = word2[j]!;
            out.push(char2);
            j++;
        }
    }

    return out.join("");
}


console.log(mergeAlternately("ab", "pqrs"))
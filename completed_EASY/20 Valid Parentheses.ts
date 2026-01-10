// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([])"
// Output: true
// Example 5:
// Input: s = "([)]"
// Output: false


const map = new Map<string, string>([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

function isValid(s: string): boolean {
    let str_array: string[] = [];

    for (let i = 0; i < s.length; i++){
        // console.log(s[i], " map: ", map.keys())
        const sym = s[i]!
        
        if (map.has(sym)){
            const sym_mapped = map.get(sym)!
            str_array.push(sym_mapped)
            // console.log(str_array)
        } else {
            const last = str_array[(str_array.length-1)]
            // console.log("last", last)
            if (last === sym) {
                str_array = str_array.slice(0,(str_array.length-1))
            } else {
                return false
            }
            // console.log(str_array)
        }
    }

    if (str_array.length === 0) {
        return true
    } else {
        return false
    }
};
// console.log(isValid("()[]{}"))
// console.log(isValid("([)]"))
console.log(isValid("([])"))
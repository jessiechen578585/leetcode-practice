// ou are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]




// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {

    const dummy = new ListNode(0);
    let tail = dummy; 
    //tail is a pointer, not a copy
    //Mutating the object through tail mutates the SAME object that dummy sees

    console.log("INIT:");
    console.log("dummy.next =", dummy.next);
    console.log("tail === dummy ?", tail === dummy);
    console.log("-----");

    let step = 1;

    while (list1 !== null && list2 !== null) {
        console.log(`STEP ${step}`);
        console.log("tail.val =", tail.val);

        if (list1.val <= list2.val) {
            console.log(`Attach list1 node ${list1.val}`);
            tail.next = list1;
            list1 = list1.next;
        } else {
            console.log(`Attach list2 node ${list2.val}`);
            tail.next = list2;
            list2 = list2.next;
        }

        console.log("dummy.next.val =", dummy.next?.val);
        console.log("tail.next.val =", tail.next?.val);

        tail = tail.next!;
        console.log("tail moved to =", tail.val);
        console.log("-----");

        step++;
    }

    tail.next = list1 !== null ? list1 : list2;
    console.log("FINAL dummy.next.val =", dummy.next?.val);

    return dummy.next;
}


//1️⃣ Helper: build a linked list from an array
function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let curr = head;

    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }

    return result;
}
//2️⃣ Helper: convert linked list back to array (for output)
function buildList(arr: number[]): ListNode | null {
    const dummy = new ListNode(0);
    let curr = dummy;

    for (const num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }

    return dummy.next;
}
const list1 = buildList([1, 2, 4]);
const list2 = buildList([1, 3, 4]);

const merged = mergeTwoLists(list1, list2);
console.log(listToArray(merged)); // [1, 1, 2, 3, 4, 4]

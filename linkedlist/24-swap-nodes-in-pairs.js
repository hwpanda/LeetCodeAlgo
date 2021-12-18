```
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

similar questions: 1721 Swapping Nodes in a Linked List; 25-reverse-nodes-in-k-group 
```;
/*
solution 1:Iterative approach, faster than 55% submissions.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	let temp = new ListNode(0, null); // maintaining a temporary reference to sync with head
	temp.next = head;
	let current = temp;

	while (current.next && current.next.next) {
		let first_node = current.next;
		let second_node = current.next.next;

		// swap the nodes using the current
		first_node.next = second_node.next;
		current.next = second_node;
		current.next.next = first_node;
		current = current.next.next;
	}
	return temp.next; // return the head using the same temporary reference
};

/*
solution 2: Recursive approach, 97% faster
*/
var swapPairs = function (head) {
	let temp = new ListNode(0, null);
	temp.next = head;
	recurse(temp);
	return temp.next;
};

function recurse(node) {
	if (node == null) return;

	let first = node.next;
	let second = null;
	if (first !== null) {
		second = node.next.next;
	}

	// swap this pair
	if (second !== null) {
		let secondNext = second.next;
		second.next = first;
		node.next = second;
		first.next = secondNext;
		// go to the next pair and repeat
		recurse(first);
	}
}

/*
solution 3: faster than 100% submissions????
*/
var swapPairs = function (head) {
	if (head === null || head.next === null) return head;

	let prev = head,
		cur = head.next;

	head = cur;
	while (cur) {
		// swapping nodes
		prev.next = cur.next;
		cur.next = prev;

		// checking for extra two node present next or not
		if (prev.next?.next) {
			cur = prev.next;
			prev.next = cur.next;
			prev = cur;
			cur = cur.next;
		} else break;
	}

	return head;
};

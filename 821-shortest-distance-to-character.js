```
[821\. Shortest Distance to a Character](https://leetcode.com/problems/shortest-distance-to-a-character/)

Difficulty: Easy

Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [String](https://leetcode.com/tag/string/)


Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Example 1:

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.


Example 2:

Input: s = "aaab", c = "b"
Output: [3,2,1,0]

```;
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
//solution 1
var shortestToChar = function (s, c) {
	let res = Array(s.length).fill(Infinity);
	let left = Infinity,
		right = Infinity;
	for (let f = 0; f < s.length; f++) {
		//counting backward at the same time
		let b = s.length - 1 - f;

		left = s[f] === c ? 0 : left + 1;
		right = s[b] === c ? 0 : right + 1;
		console.log('f', f, 'left', left, 'right', right);

		res[f] = Math.min(res[f], left);
		res[b] = Math.min(res[b], right);
		console.log('res', res);
	}
	return res;
};
const input = 'loveleetcode';
//console.log(shortestToChar(input, 'e'));

//solution 2
const shortestToChar = (s, c) => {
	s = s.split('');
	let res = [];
	//loop through the string array
	for (let i = 0; i < s.length; i++) {
		let dist = Infinity;
		if (s[i] === c) {
			res.push(0);
			continue;
		}

		//nested loop to find the closest index
		//counting forward from current i
		for (let j = i; j < s.length; j++) {
			if (s[j] === c) {
				dist = j - i;
				break;
			}
		}
		//counting backward from current i
		for (let j = i; j >= 0; j--) {
			if (s[j] === c) {
				dist = Math.min(dist, i - j);
				break;
			}
		}
		res.push(dist);
	} //end loop string array
	return res;
};
console.log(shortestToChar(input, 'e'));

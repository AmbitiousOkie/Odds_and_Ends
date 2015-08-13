// In this kata, you must create a function powers that takes an array, and returns the number of subsets possible to create from that list. In other words, counts the power sets.

// For instance

// powers([1,2,3]) => 8
// ...due to...

// powerSet([1,2,3]) =>
// [[],
//  [1],
//  [2],
//  [3],
//  [1,2],
//  [2,3],
//  [1,3],
//  [1,2,3]]

// My solution


function powers(list) {
	return Math.pow(2, list.length);
}


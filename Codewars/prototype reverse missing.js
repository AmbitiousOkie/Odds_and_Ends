// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the array it is called on, and then returns that same array.

// Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array


// My solution:

Array.prototype.reversed = function(array) {
  var reverse = [];
  for (var i = 0; i<this.length; i++) {
  	reverse[i] = this[this.length - i - 1];
  }
  return reverse;
};
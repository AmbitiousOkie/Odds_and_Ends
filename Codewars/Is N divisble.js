// Create a function isDivisible(n,...) that checks if the first agrument n is divisible by all other arguments (return true if no other arguments)

// Examples

isDivisible(6,1,3,)--> true because 6 is divisible by 1 and 3
isDivisible(12,2)--> true because 12 is divisible by 2
isDivisible(100,5,4,10,25,20)--> true
isDivisible(12,7)--> false because 12 is not divisible by 7

// My solution
function isDivisible(){
  var truth = false;

  if (arguments.length == 1) {
  	return true;
  };
  
  for (i = 1; i < arguments.length; i++) {
  	if ((arguments[0] % arguments[i]) == 0) {
  		truth = true;
  	} else {
  		return false;
  	};
  }

  return truth;
}

// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The call() method calls a function with a given this value and arguments provided individually.

// Clever solution 1
function isDivisible(n){
  return [].slice.call(arguments, 1).every(function(a){ return !(n % a) });
}

// Clever solution 2
function isDivisible(n) {
  for (var i = 1; i < arguments.length; i++) {
    if (n % arguments[i]) { return false };
  }
  return true;
}

// Clever solution 3
function isDivisible(n) {
  return [].every.call(arguments, function(x) { return !(n%x) })
}
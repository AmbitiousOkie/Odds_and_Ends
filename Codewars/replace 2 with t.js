// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

tea42('coffee') //should return 'coffee'
tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
tea42(9022) //should return '90tt'
tea42(5676765) //should return '5676765'
tea42('2u2u') //should return 'tutu'



// My solution
function tea42(input) {
	var tea = String(input);
	for(i=0;i<=tea.length;i++){
		tea = tea.replace("2", "t");
		console.log(tea);
	};
	return tea;
}


// The clever answer
function tea42(input) {
 return input.toString().replace (/2/g, 't');  // -- /2/g means do a global search for 2 in the string
};
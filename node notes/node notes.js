node notes

 "=== Good for ==="

  // Websocket server
  // fast file upload client
  // ad server
  // any real-time data apps


"=== It is not ==="

// Not a web framework
// Not for beginners
// Not multi-threaded


"=== Non-blocking psuedocode example ==="
// 1. Read file from filesystem
// 2.	  when complete, print the contents (this is the callback)
// 3. Do something else

// Is typically finished in 1, 3, 2 order


"=== non-blocking code example ==="

fs.readFile('/etc/hosts', function (err, contents)) {
	console.log(contents);
}
console.log('Doing something else');


"=== blocking code example ==="
var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Doing something else');


"=== alternative blocking code example ==="
var callback = function(err, contents) {
	console.log(contents);
}
fs.readFile('/etc/hosts', callback);
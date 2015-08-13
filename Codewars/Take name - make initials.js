function initials(n){
  var arr = n.split(" ");
  var fullName, name;
  for (i = 0; i < arr.length; i++ ) {
    name = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase(); 
    
    if ( i == 0) {
      fullName = name.charAt(0)+".";
    } else if (i != arr.length - 1) {
      fullName += name.charAt(0)+".";
      console.log('#' + i + " " + fullName);
    } else {
      fullName += name;
    }
  }
  return fullName;
}
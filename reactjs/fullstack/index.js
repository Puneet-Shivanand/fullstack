let fname="Ryan";
let lname="Dhungel";
let age=prompt('Guess '+fname+' \'s Age?');


//old
//let result = fname+' '+lname+ ' '+age+' years old';
//alert(result);

// using template string
let result = `${fname} ${lname} is ${age} years old`;
alert(result);


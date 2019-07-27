const fs = require('fs');
const fileName = "readme.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());

console.log("Node js can also do sync programming... !");

const fs = require('fs');
const fname = "target.txt"
fs.watch(fname, () => console.log("File changed"));



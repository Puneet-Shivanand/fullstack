const fs = require('fs');
const fileName = "readme.txt";

fs.readFile(fileName, (err, data) => {
	if (err) {
		console.log(err);
}
	console.log(data.toString());
});

console.log("Node js async programming... ?");

const express = require('express');
const app = express();


app.get('/', (req,resp) => {
	resp.send("reply from express");

});

app.listen(3000);

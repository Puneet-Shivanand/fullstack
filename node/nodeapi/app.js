const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

dotenv.config()

//database connect mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => console.log("DB connected"));

mongoose.connection.on('error', err =>{
	console.log(`DB connection error: ${err.message}`)
});

// bring routes
const postRoutes = require("./routes/posts");

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(expressValidator());
app.use('/', postRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`A node js api is listening on ${port}`);
});

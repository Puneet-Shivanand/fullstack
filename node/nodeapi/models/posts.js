const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
title:{
	type:String,
	required: true,
//	minlength:4,
//	maxlength:100
	},
body:{
        type:String,
        required: true,
//        minlength:4,
//        maxlength:500
        }
	
});

module.exports = mongoose.model("Post", postSchema);

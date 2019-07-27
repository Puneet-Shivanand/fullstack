exports.createPostValidator = (req, res, next) =>{
	//title
	req.check('title', "Write a title").notEmpty()
	req.check('title', "Title must be between 4 to 100 characters").isLength({
 		min:4,
		max:100
	});

        //body
        req.check('body', "Write a Body").notEmpty()
        req.check('body', "Body must be between 4 to 250 characters").isLength({
                min:4,
                max:250
        });
	
//all other errors
	const errors = req.validationErrors()
	if (errors){
	const firstError = errors.map((error) => error.msg)[0]
	return res.status(400).json({error:firstError})
	}
	// proceed to next middleware
	next();
//end of all errs
};

const postController= require('../controllers/posts')
const express = require('express')

const router = express.Router()
const validator = require('../validators')

router.get('/', postController.getPosts);

router.post('/posts', validator.createPostValidator, postController.createPosts);

module.exports = router;

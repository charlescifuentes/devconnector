const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Test route
// @acces Public
router.get('/', (req, res) => res.send('Post Route'));

module.exports = router
const express = require('express');
const router = express.Router();
// const interface1 = require('../views/transformer.html');

router.get('/1', (req, res) => {
	res.render('transformer');
})

module.exports = router;
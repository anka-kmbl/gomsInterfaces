const express = require('express');
const router = express.Router();

router.get('/first', (req, res) => {
	// res.send(200);
	res.render('transformer');
});

router.get('/second', (req, res) => {
	res.render('buttonless');
});

router.get('/third', (req, res) => {
	res.render('convRadio');
});

router.get('/fourth', (req, res) => {
	res.render('pointers');
})



module.exports = router;
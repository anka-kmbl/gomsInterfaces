const express = require('express');
const router = express.Router();
// const interface1 = require('../views/transformer.html');

router.get('/', (req, res) => {
	res.render('chooseInterface');
});


module.exports = router;
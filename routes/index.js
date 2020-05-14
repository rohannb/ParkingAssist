var express = require('express');
var soda = require('soda-js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('index_request');
	res.sendfile('views/index.html');
});

router.get('/test', function(req, res, next) {
	var parking = new soda.Consumer('data.melbourne.vic.gov.au');

	parking.query()
	  .withDataset('vh2v-4nfs')
	  .limit(5)
	  .where({ bay_id: '3274' })
	  .getRows()
	    .on('success', function(rows) { console.log(rows); })
	    .on('error', function(error) { console.error(error); });

	  res.render('index', { title: 'Express' });
});




module.exports = router;

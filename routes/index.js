var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(
  		//Sample JSON for our get request
		{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"base":"cmc stations","main":{"temp":284.68,"pressure":1014,"humidity":76,"temp_min":283.15,"temp_max":286.15},"wind":{"speed":7.7,"deg":250},"clouds":{"all":0},"dt":1450720666,"sys":{"type":1,"id":5091,"message":0.1003,"country":"GB","sunrise":1450685039,"sunset":1450713220},"id":2643743,"name":"London","cod":200}
  	);
});

router.post('/register', function(req, res) {
  Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err});
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'});
    });
  });
});


module.exports = router;

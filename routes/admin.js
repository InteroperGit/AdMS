var express = require('express');
var router = express.Router();

require("node-jsx").install({
  harmony: true,
  extension: ".jsx"
});

var React = require("react");
var AppRunner = require('../public/javascripts/admin/app/view/app');

/* GET home page. */
router.get('/', function(req, res) {
  AppRunner.renderToString(function(markup) {
    console.log(markup);
    res.render('admin', {
      title: 'AdMs Administration Panel',
      markup: markup
    });
  });
});

module.exports = router;
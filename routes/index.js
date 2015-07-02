var express = require('express');
var router = express.Router();

require("node-jsx").install({
  harmony: true,
  extension: ".jsx"
});

var React = require("react");
    //App = React.createFactory(require("../public/javascripts/components/app"));
    //AppRunner = require('../public/javascripts/components/app');

/* GET home page. */
router.get('/', function(req, res) {
  //var markup = React.renderToString(App());
  //var markup = AppRunner.renderToString();
  var markup = '';

  res.render('index', {
    title: 'AdMs',
    markup: markup
  });
});

module.exports = router;
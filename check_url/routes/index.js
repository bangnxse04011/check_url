var express = require('express');
var router = express.Router();
var https = require("https");
var unit = require('../public/javascripts/unit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/check_url/:url' , (req,res) => {
  let _url_check = req.params['url']; 
  let url = unit.method_check_url("https://vnexpress.net/");
  https.get(url, res => {
    res.setEncoding("utf8");
    let data_json = "";
    res.on("data", data => {
      data_json += data;
    });
    res.on("end", () => {
      data_json = JSON.parse(data_json);
      console.log(data_json);
    });
  });
});

module.exports = router;

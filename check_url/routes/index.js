var express = require('express');
var router = express.Router();
var https = require("https");
var axios = require('axios')
var unit = require('../public/javascripts/unit');

/*
* GET home page. 
*/
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Kiểm tra URL', result_check_url: '', _url_scan: '' });
});

/**
 * Method check URL using API total virus.
 */
router.get('/check_url', (req, resp) => {
  // Get URL from form.
  let _url_check = req.query.url_scan;
  // Create key and URL check
  let _url = unit.common_setting_api(_url_check);

  var params = {
    url: _url.toString(),
    method: 'get'
  }
  axios(params)
    .then(res =>
      resp.render('index', { title: 'Kiểm tra URL', result_check_url: res.data, _url_scan: _url_check })
    ).catch(error => {
      console.error(error)
    })
});
module.exports = router;

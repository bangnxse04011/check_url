var express = require('express');
var router = express.Router();
var https = require("https");
var axios = require('axios')
var unit = require('../public/javascripts/unit');
const puppeteer = require('puppeteer');

/*
* GET home page. 
*/
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Kiểm tra URL', result_check_url: '', _url_scan: '', mess: '' });
});


/**
 * Method check URL using API total virus.
 */
router.get('/check_url', (req, resp) => {
  // Get URL from form.
  let _url_check = req.query.url_scan;
  if (_url_check.trim() == '' || _url_check.trim() == "") {
    unit.common_open_new(_url_check);
    // resp.redirect("/");
  }
  if (!unit.common_valid_URL(_url_check)) {
    resp.render('index', { title: 'Kiểm tra URL', result_check_url: '', _url_scan: '', mess: 'Bạn có biết URL nó thế nào ko?' });
  }
  // Check in list
  let list_keyword = unit.common_keyword_detect_url();
  for (let index = 0; index < list_keyword.length; index++) {
    if (_url_check.trim().indexOf(list_keyword[index]) > 0) {
      let result_check_url = {};
      result_check_url.positives = -1;
      result_check_url.permalink = '';
      result_check_url.total = '-';
      resp.render('index', { title: 'Kiểm tra URL', result_check_url: result_check_url, _url_scan: _url_check, mess: '' })
    }
  }
  // Create key and URL check
  let _url = unit.common_setting_api(_url_check);

  var params = {
    url: _url.toString(),
    method: 'get'
  }
  axios(params)
    .then(res =>
      resp.render('index', { title: 'Kiểm tra URL', result_check_url: res.data, _url_scan: _url_check, mess: '' })
    ).catch(error => {
      console.error(error)
    })
});
module.exports = router;

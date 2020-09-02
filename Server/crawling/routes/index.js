var express = require('express');
var router = express.Router();
const request = require('request');


const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/crawlingTest", function(req, res, next){
  let url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";

  request(url, function(error, response, body){
    console.log(body)
  });
})

router.get("/test", function(req, res, next){
  const getHtml = async () => {
    try {
      let body = await axios.get("http://www.hongik.ac.kr/contents/www/cor/studentsno.html");
      console.log(body);
    } catch (error) {
      console.error(error);
    }
  }
});

//router.use('/scrapper', require('./scrapper'));
module.exports = router;

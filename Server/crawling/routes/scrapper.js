const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
const getHtml = async () => {
    try {
      return await axios.get("http://www.hongik.ac.kr/contents/www/cor/studentsno.html");
    } catch (error) {
      console.error(error);
    }
  }


// getHTML 함수 실행 후 데이터에서
// div > ul > li .section02
// 에 속하는 제목을 titleList에 저장
getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.grid table tbody").children("tr");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          number: $(this).find('div.first-column').text(),
          title:$(this).find('span.text').text(),
          url: $(this).find('div.subject a').attr('href'),
          //image_url: $(this).find('p.poto a img').attr('src'),
          //image_alt: $(this).find('p.poto a img').attr('alt'),
          //date: $(this).find('span.p-time').text(),
          date: $(this).find('span.p-time').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));
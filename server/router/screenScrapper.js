const scrape =  require('express').Router();
var request = require('request');
// var cheerio = require('cheerio');
var file = require('fs');
var DilbertURL = 'http://Dilbert.com/strip/';

var out=[];


scrape.get('/scrape', function(req, res){
  console.log('inside scrape route');
  // url = 'https://www.iposen.dk/shop/display/products?offers=1&category_id=41';
  var product_price = [3,8,12,27,24,17,25,18,18,14]
    , product_name = ['Banan', 'Kiwi', 'Mango', 'Vandmelon', 'Druer', 'Mush Melon', 'Æble', 'Jordbær', 'Ananas', 'Granatæble']
    , margin = [50,65,45,80,56,80,35,68,35,45]
    , currentPrice = [2,7,12,25,20,15,20,15,16,10]
    , newPrice = [2,6,12,24,19,15,21,14,16,10]
    , outOftheDoor = [1,4,10,20,18,14,18,9,12,7]
    , companyName = "rema1000"
    , image = ["http://natureandnutrition.com/wp-content/uploads/2015/04/Health-Benefits-of-Bananas.jpg"
    , "https://cdn.grofers.com/app/images/products/full_screen/pro_294783.jpg"
    , "https://2rt9loawzcmbvlze40mhj9n0-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/mangoes-760x428.jpg"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXDxbvNdHNtWDmdqyIc-CjcYPlAHVi8VTzixlTvVF8WTk_K_Ljg"
    , "https://5.imimg.com/data5/CU/PW/MY-5137401/purple-grapes-500x500.jpg"
    , "https://4.imimg.com/data4/UT/OJ/MY-24421102/muskmelon-1-500x500.png"
    , "https://ecs7.tokopedia.net/img/product-1/2016/7/21/6322224/6322224_ac9c1e18-fe9f-4b26-a5ae-c08061bf0977.jpg"
    , "https://cdn1.medicalnewstoday.com/content/images/articles/271/271285/three-strawberries.jpg"
    , "https://keelings.ie/wp-content/uploads/2016/04/pineapple-1.jpg"
    , "https://www.organicfacts.net/wp-content/uploads/2013/05/Pomegranate11.jpg"];
  product_name.map((item,key)=>{
    console.log(item);
    out.push({'productName':item,
      'productPrice':product_price[key],
      'companyName':companyName,
      'margin': margin[key],
      'currentPrice': currentPrice[key],
      'newPrice': newPrice[key],
      'outOftheDoor': outOftheDoor[key],
      'url' : image[key]
    });
  });
  console.log('out - > ', out);
  res.send(out);
  // request(url, function(error, response, html){
  //   if(!error){
  //       var $ = cheerio.load(html);
  //
  //   }
  // });
})

scrape.post('/getData', (req,res)=>{
  console.log("inside getData route");
  var temp=[];
  var data=file.readFileSync('./data/acPayable.json', 'utf8');
  var content=JSON.parse(data);
  res.send(content);
});


module.exports = scrape;

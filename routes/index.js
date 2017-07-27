var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/test', function(req, res, next) {
//   res.send('hello test');
// });

router.get('/task1', function(req, res, next) {

var fs = require('fs')
  , filename = process.argv[2];

fs.readFile('test.txt', 'utf8', function(err, data) {
  if (err) throw err;

  fs.readFile('test2.txt', 'utf8', function(err, data2) {
  if (err) throw err;
  // console.log('OK: ' + test);
  console.log("BEFORE REMOVING SPECIAL CHARACTERS:")
  console.log(data + data2)
  var str = data + data2;
  console.log("AFTER REMOVING SPECIAL CHARACTERS:")
	console.log(str.replace(/[^a-zA-Z. ]/g, ""));
  res.send('See console for result');
  
});

  

  
});

});


router.get('/task2', function(req, res, next) {
	xyloHack(81)
  res.send('See console for result');
});

module.exports = router;


function xyloHack(n) {
		var str = 'i love JavaScript';

		if(n%2==0){
			console.log("Number "+n +" is even");
			console.log(str.toUpperCase())
			
		} else {
			console.log("Number "+n +" is odd");
			console.log(str.toLowerCase())
		}
	 // console.log("hello: ", n);  
}






























	// xyloHack(81)

	// var dot = 'fooBar.md';
	// var doll = 'da$$rk lord \n accounta$ble';
	// var doll2 = 'desm@ond is god';
	// var doll3 = 'accounta$ble';

	 //  // console.log('OK: ' + test);
 //  console.log("BEFORE REMOVING SPECIAL CHARACTERS:")
 //  console.log(data)
 //  var str = data;
 //  console.log("AFTER REMOVING SPECIAL CHARACTERS:")
	// console.log(str.replace(/[^a-zA-Z. ]/g, ""));
 //  res.send('See console for result');
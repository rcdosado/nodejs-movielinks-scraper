var request = require('request');
var cheerio = require('cheerio');
var ptn = require('parse-torrent-name');

var searchTerm = 'screen+scraping';
var url = 'http://foosite.com/Film/2016/';
var result,fileUrl,prevMovieTitle;;
var moviejson = {title:"",year:"",quality:"",resolution:"",link:""};

request(url, function(err, resp, body){
  $ = cheerio.load(body);
  
  links = $('a'); //jquery get all hyperlinks

  console.log("{");
  $(links).each(function(i, link){

	//encoded URL, save this
	fileUrl = $(link).attr('href');

	//this will not include a link that does not end in ".XXX"
	if ( fileUrl.slice(-4)[0]!='.')
		return true;

	//get the normalise URL with no escape codes
	result = ptn(  unescape( fileUrl  )  );
	
	//removes slashes for folders
	moviejson.title = result.title.replace('/','');

	//this code was made to prevent duplicates
	if(prevMovieTitle == moviejson.title){	
		return true; 
	}
	prevMovieTitle = moviejson.title;

	//if title has no contents, go to the next
	if(moviejson.title=='')
		return true;


	moviejson.year  = result.year;
	moviejson.quality = result.quality;
	moviejson.resolution = result.resolution;
	moviejson.link  = url+fileUrl;
	console.log(JSON.stringify(moviejson)+",");
  });
  console.log("}");
});
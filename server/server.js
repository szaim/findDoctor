var express = require("express");
var bodyParser = require("body-parser");
var unirest = require("unirest");
var NodeGeocoder = require('node-geocoder');
var app = express();
app.use(bodyParser.json());

app.use('/', express.static('build'));

var url = 'https://api.betterdoctor.com/2016-03-01/practices?';
var clientSecret = '6fcc749d0deb423f8b9d0d0cc4511b93';
var latLong;

app.get('/betterdoctor/:name/:location', function(req, res) {
   var name = req.params.name;
   var location = req.params.location;

   var geocoderProvider = 'google';
   var httpAdapter = 'https';
   // optionnal
   var extra = {
      apiKey: 'AIzaSyCwg5Nu1Ti8BHSJWbijp_ATUTKS_jfFJyc', // for map quest
      formatter: null         // 'gpx', 'string', ...
   };

   var geocoder = NodeGeocoder(geocoderProvider, httpAdapter, extra);
   geocoder.geocode(location, function(err, res) {
     // console.log('location', res);
     latLong = Math.round(res[0].latitude) + '%2C' + Math.round(res[0].longitude) + '%2C100';
     console.log('latlong', latLong);
     console.log('url', url);
     console.log('name', name);
     console.log('location', location);
   });

   unirest.get(url + 'name=' + name + '&location=' + latLong + '&skip=0&limit=30' + '&user_key=' + clientSecret)
   .end(function(data){
      return res.send(data);
   });
});



app.listen(process.env.PORT || 8080, function(){
	console.log("EventBase server running!!");
});



//https://api.betterdoctor.com/2016-03-01/practices?name=skin&location=37%2C-122%2C100&skip=0&limit=30&user_key=6fcc749d0deb423f8b9d0d0cc4511b93


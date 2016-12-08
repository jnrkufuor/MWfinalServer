
directory=[];
$(document).ready(
 function() {
  $(".s-btn").click(function() {
   $(".s-input").fadeOut();
   $(".m-btn").fadeIn();
   $(".signUp").fadeToggle();
  });
 }
);

$(document).ready(
 function() {
  $(".atm-btn").click(function() {
   $(".reservation").fadeOut();
   $(".reservation-atm").fadeIn();
  });
 }
);

$(document).ready(
 function() {
  $(".hotel-btn").click(function() {
   $(".reservation").fadeOut();
   $(".reservation-hotel").fadeIn();
  });
 }
);
$(document).ready(
 function() {
  $(".close-atm").click(function() {
   $(".reservation-atm").fadeOut();
   $(".reservation").fadeIn();
  });
 }
);
$(document).ready(
 function() {
  $(".close-hotel").click(function() {
   $(".reservation-hotel").fadeOut();
   $(".reservation").fadeIn();
  });
 }
);

$(document).ready(
 function() {
  $(".message").click(function() {
   $(".searchbar").fadeOut();
   $(".directory").fadeOut();
   $(".lgout").fadeOut();
   $(".message").fadeOut();
   $(".reserv").fadeOut();
   $(".search").fadeOut();
   $(".list").fadeOut();
   $(".reservation").fadeOut();
   var options = {
    enableHighAccuracy: true,
    maximumAge: 3600000
   }
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
   navigator.contacts.pickContact(function(contact){
    console.log('The following contact has been selected:' + JSON.stringify(contact));
   },function(err){
    console.log('Error: ' + err);
   });
  });
 }
);


$(document).ready(
 function() {
  $(".search").click(function() {
   $(".searchbar").fadeToggle();
   $(".directory").fadeOut();
   $(".lgout").fadeOut();
   $(".message").fadeOut();
   $(".reserv").fadeOut();
   $(".search").fadeOut();
   $(".list").fadeOut();
   $(".reservation").fadeOut();
  });
 }
);

$(document).ready(
 function() {
  $(".reserv").click(function() {
   $(".searchbar").fadeOut();
   $(".directory").fadeOut();
   $(".lgout").fadeOut();
   $(".message").fadeOut();
   $(".reserv").fadeOut();
   $(".search").fadeOut();
   $(".list").fadeOut();
   $(".reservation").fadeToggle();
  });
 }
);

$(document).ready(
 function() {
  $(".directory").click(function() {
   $(".list").fadeToggle();
   $(".searchbar").fadeOut();
   $(".directory").fadeOut();
   $(".lgout").fadeOut();
   $(".message").fadeOut();
   $(".reserv").fadeOut();
   $(".search").fadeOut();
   $(".reservation").fadeOut();
  });
 }
);

$(document).ready(
 function(){
  $(".close").click(function(){
   $(".m-btn").fadeOut();
   $(".signUp").fadeToggle();
  });
 }
);

$(document).ready(
 function(){
  $(".close-l").click(function(){
   $(".m-btn").fadeIn();
   $(".signUp").fadeIn();
   $(".lgn").fadeOut();
  });
 }
);
$(document).ready(
 function(){
  $(".login").click(function(){
   $(".m-btn").fadeOut();
   $(".signUp").fadeOut();
   $(".lgn").fadeIn();
  });
 }
);

$(document).ready(
 function(){
  $(".sign").click(function(){
   $(".m-btn").fadeOut();
   $(".signUp").fadeOut();
   $(".add").fadeIn();
  });
 }
);


$(document).ready(
 function(){
  $(".close-s").click(function(){
   $(".m-btn").fadeIn();
   $(".signUp").fadeIn();
   $(".add").fadeOut();
  });
 }
);

$(document).ready(
 function(){
  $(".menu").click(function(){
   $(".menubar").fadeToggle();
  });
 }
);
$(document).ready(
 function(){
  $(".food").click(function(){
   var food ="restaurant";
   findPlaces(food);
  });
 }
);
$(document).ready(
 function(){
  $(".hotel").click(function(){
   var hotel ="lodging";
   findPlaces(hotel);
  });
 }
);

$(document).ready(
 function(){
  $(".hospital").click(function(){
   var hospital ="hospital";
   findPlaces(hospital);
  });
 }
);
$(document).ready(
 function(){
  $(".bars").click(function(){
   $(".directory").fadeToggle();
   $(".lgout").fadeToggle();
   $(".message").fadeToggle();
   $(".reserv").fadeToggle();
   $(".search").fadeToggle();
   $(".list").fadeOut();
   $(".searchbar").fadeOut();
   $(".reservation-atm").fadeOut();
   $(".reservation-hotel").fadeOut();
   $(".reservation").fadeOut();
  });

  $(".lgout").click(function(){
   $(".directory").fadeOut();
   $(".lgout").fadeOut();
   $(".message").fadeOut();
   $(".reserv").fadeOut();
   $(".search").fadeOut();
   $("#splash").fadeIn();
   $(".map-dashboard").fadeOut();
   $('#snackbar').html("Logged Out");
   myFunction();
   clearOverlays();
   sessionStorage.clear();
  });
 }
);



$(document).ready(
 function(){
  $(".store").click(function(){
   var store ="store";
   findPlaces(store);
  });
 }
);
$(document).ready(
 function(){
  $(".school").click(function(){
   var school ="school";
   findPlaces(school);
  });
 }
);

$(document).ready(
 function(){
  $(".visa").click(function(){
   var atm ="atm";
   findPlaces(atm);
  });
 }
);


var map;
var markers = Array();
var infos = Array();

function initMap(lat,long) {
 var myCentre = new google.maps.LatLng(Ulat,Ulong);
 geocoder = new google.maps.Geocoder();
 map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: myCentre,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
 });
 var marker = new google.maps.Marker({
  position: myCentre,
  map: map,
  animation: google.maps.Animation.BOUNCE
 });
 var input = document.getElementById('search');
 var autocomplete = new google.maps.places.Autocomplete(input);
 clearOverlays();
 marker.setMap(map);
}
var Ulat,Ulong;
function onSuccess(position) {

 Ulat= position.coords.latitude ;   
 Ulong= position.coords.longitude ;
 initMap();
};


function onError(error) {
 alert('code: '  + error.code  + '\n' + 'message: ' + error.message + '\n');
}

// clear overlays function
function clearOverlays() {
 if (markers) {
  for (i in markers) {
   markers[i].setMap(null);
  }
  markers = [];
  infos = [];
 }
}
// clear infos function
function clearInfos() {
 if (infos) {
  for (i in infos) {
   if (infos[i].getMap()) {
    infos[i].close();
   }
  }
 }
}
var geocoder;
// find address function
function findAddress() {
 initMap();
 var address = document.getElementById("search").value;
 // script uses our 'geocoder' in order to find location by address name
 geocoder.geocode( { 'address': address}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) { // and, if everything is ok
   // we will center map
   var addrLocation = results[0].geometry.location;
   clearOverlays();
   map.setCenter(addrLocation);
   var addrMarker = new google.maps.Marker({
    position: addrLocation,
    map: map,
    title: results[0].formatted_address
   });
  } else {
   $('#snackbar').html("Could Not Find Location");
   myFunction();
  }
 });
}


// prepare variables (filter)
function findPlaces(type){
 var cur_location = new google.maps.LatLng(Ulat, Ulong);
 // prepare request to Places
 var request = {
  location: cur_location,
  radius: 9000,
  types: [type]
 };
 // send request
 service = new google.maps.places.PlacesService(map);
 service.nearbySearch(request, createMarkers);
 customPlaces(type);
}

// create markers (from 'findPlaces' function)
function createMarkers(results, status) {
 if (status == google.maps.places.PlacesServiceStatus.OK) {
  // if we have found something - clear map (overlays)
  clearOverlays();
  // and create new markers by search result
  for (var i = 0; i < results.length; i++) {
   createMarker(results[i]);
   item={place:results[i].name,type:results[i].types[0]};
   directory.push(item);
   $(".dir").append("<li class='lili'>["+results[i].types[0]+"]"+results[i].name+"<li>");
  }
 } else if (status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
  alert('Sorry, nothing is found');
 }
}

// creare single marker function

function createMarker(obj) {
 // prepare new Marker object
 var mark = new google.maps.Marker({
  position: obj.geometry.location,
  map: map,
  title: obj.name
 });
 markers.push(mark);
 // prepare info window
 var infowindow = new google.maps.InfoWindow({
  content: '<img src="' + obj.icon + '" /><font style="color:#000;">' + obj.name + 
  '<br />Rating: ' + obj.rating + '<br />Vicinity: ' + obj.vicinity + '</font>'
 });

 google.maps.event.addListener(mark, 'click', function() {
  clearInfos();
  infowindow.open(map,mark);
 });
 infos.push(infowindow);
}

jQuery(document).ready(function ($) {
 $('.dne-sign').click(function (event) {
  event.preventDefault();
  var username=$('#uname').val();
  var password= $('#pword').val();
  var fname=$('#fname').val();
  var lname= $('#lname').val();
  var phone=$('#phone').val();
  if(username==""||password==""||fname==""||lname==""||phone=="")
  {
   $('#snackbar').html("Please fill all fields");
   myFunction();
   return;
  }
  $.ajax({
   type: 'POST',
   url: 'http://52.89.116.249/~ernest_kufuor/ajax/projectAjax.php?cmd=2&password='+password+'&username='+username+'&lname='+lname+'&fname='+fname+'&phone='+phone,
   error: function () {
   },
   success: function (html) {

    if(html==true)
    {
     $('#snackbar').html("Log In Now "+ fname);
     $('#uname').val("");
     $('#pword').val("");
     $('#fname').val("");
     $('#lname').val("");
     $('#phone').val("");
     $(".m-btn").fadeOut();
     $(".signUp").fadeOut();
     $(".add").fadeOut();
     myFunction();
     $.ajax({
      type: 'POST',
      url: 'ajax/projectAjax.php?cmd=3&phone='+phone+'&name='+username,
      error: function () {
      },
      success: function (html) {
      },
     });
    }
    else
    {
     $('#snackbar').html("Could Not Add You");
     myFunction();
    }
   },
  });
 });
});

function myFunction() {
 var x = document.getElementById("snackbar");
 x.className = "show";
 setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function mySecond()
{
 var x = document.getElementById("snack");
 x.className = "show";
 setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

jQuery(document).ready(function ($) {
 $('.dne-login').click(function (event) {
  event.preventDefault();
  var username=$('#log-name').val();
  var password= $('#log-pword').val();
  $.ajax({
   type: 'POST',
   url: 'http://52.89.116.249/~ernest_kufuor/ajax/projectAjax.php?cmd=1&password='+password+'&username='+username,
   error: function () {
    // alert('error, failed to get id');
   },
   dataType: 'json',
   success: function (response) {
    if(response.message=="false")
    {
     $('#snackbar').html("Invalid Username/Password");
     myFunction();
    }
    else
    {
     var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
     }
     var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
     sessionStorage.user=response.USERNAME;
     sessionStorage.id=response.uid;
     sessionStorage.phone=response.phone;
     window.location="#dashboard";
     $('#username').val("");
     $('#pword').val("");
     $(".m-btn").fadeOut();
     $(".signUp").fadeOut();
     $(".lgn").fadeOut();
     $("#splash").fadeOut();
     $(".map-dashboard").fadeIn();
     $('#snack').html("Logged In");
     mySecond();
    }
   },
  });
 });
});


jQuery(document).ready(function ($) {
 $('.dne-atm').click(function (event) {
  event.preventDefault();
  var bank=$('#bank').val();
  var branch= $('#branch').val();
  var aName= $('#accountName').val();
  var aNum= $('#accountNum').val();
  if(bank==""||aName==""||branch==""||aNum=="")
  {
   $('#snack').html("Fill All Fields");
   mySecond();
   return;
  }
  $.ajax({
   type: 'POST',
   url: 'http://52.89.116.249/~ernest_kufuor/ajax/projectAjax.php?cmd=4&bank='+bank+'&branch='+branch+'&name='+aName+'&num='+aNum+'&phone='+sessionStorage.phone,
   error: function () {
    // alert('error, failed to get id');
   },
   dataType: 'json',
   success: function (response) {
    if (response!="false"){
     $('#bank').val("");
     $('#branch').val("");
     $('#accountName').val("");
     $('#accountNum').val("");
     $('#snack').html("Processing");
     mySecond();
    }
    //use push notification to inform the user of his receipt
   },
  });
 });
});

jQuery(document).ready(function ($) {
 $('.dne-hotel').click(function (event) {
  event.preventDefault();
  var bank=$('#hotel-name').val();
  var branch= $('#room').val();
  var aName= $('#date').val();
  if(bank==""||aName==""||branch=="")
  {
   $('#snack').html("Fill All Fields");
   mySecond();
   return;
  }
  $.ajax({
   type: 'POST',
   url: 'http://52.89.116.249/~ernest_kufuor/ajax/projectAjax.php?cmd=5&hotel='+bank+'&room='+branch+'&date='+aName+'&phone='+sessionStorage.phone,
   error: function () {
    // alert('error, failed to get id');
   },
   dataType: 'json',
   success: function (response) {
    if (response!="false"){
     $('#hotel-name').val("");
     $('#room').val("");
     $('#date').val("");
     $('#snack').html("Processing");
     mySecond();
    }
    //use push notification to inform the user of his receipt
   },
  });
 });
});

function customPlaces(type)
{
 $.ajax({
  type: 'POST',
  url: 'http://52.89.116.249/~ernest_kufuor/ajax/projectAjax.php?cmd=6&type='+type,
  error: function () {
   // alert('error, failed to get id');
  },
  dataType: 'json',
  success: function (response) {
   if (response!="false"){
    console.log(response);
    for (var i = 0; i < response.length; i++) {
     var mark = new google.maps.Marker({
      position: new google.maps.LatLng(response[i].latitude,response[i].longitude),
      map: map,
      title: response[i].name // this works, giving the marker a title with the correct title
     });
     markers.push(mark);
     // prepare info window
     var infowindow = new google.maps.InfoWindow({
      content: '<font style="color:#000;">' + response[i].name + 
      '<br />Rating: ' + response[i].rating + '<br />Vicinity: ' + response[i].vicinity + '</font>'
     });

     google.maps.event.addListener(mark, 'click', function() {
      clearInfos();
      infowindow.open(map,mark);
     });
     infos.push(infowindow);
     $(".dir").append("<li class='lili'>["+response[i].type+"]"+response[i].location+"<li>");
    }
   }

  },
 });
}


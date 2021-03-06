
var HTMLnavBarButtonsStart = '<div class="navbar-grid"><div class="row">'
var HTMLnavBarButtons = '<div class="col-2"><div class="navbar"><a href="../../portfolio/framework/index.html">%data%</a></div></div>'
// var HTMLnavBarButtons = '<div class="col-2"><div class="navbar">%data%</div></div>'
var HTMLnavBarButtonsEnd = '</div></div>'

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role-text" >%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<div class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></div>';
var HTMLemail = '<div class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></div>';
var HTMLtwitter = '<div class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></div>';
var HTMLlinkedIn = '<div class="flex-item"><span class="orange-text">linkedIn</span><span class="white-text">%data%</span></div>';
var HTMLgithub = '<div class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></div>';
var HTMLblog = '<div class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></div>';
var HTMLlocation = '<div class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></div>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry-grid"></div>';
var HTMLworkEmployer = '<div class="row"><div class="col-1"></div><div class="col-5-work"><a href="%url%">%data%</a></div>';
var HTMLworkLocation =  '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';
var HTMLworkTitle = '<div class="row"><div class="col-2"></div><div class="col-4-work"><div class="job-title-color">%data%</div></div>';
var HTMLworkDates = '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';
var HTMLworkDescription = '<div class="row"><div class="col-3"></div><div class="col-7"><p class="p-work" >%data%</p-work></div><div class="col-2"></div></div>';

var HTMLprojectStart = '<div class="project-entry-grid"></div>';
var HTMLprojectTitle = '<div class="row"><div class="col-1"></div><div class="col-5-work"><a href="">%data%</a></div>';
var HTMLprojectDates = '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';
var HTMLprojectDescription = '<div class="row"><div class="col-1"></div><p class="p-work" >%data%</p-work><br></div><br>';
// var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry-grid"></div>';
var HTMLschoolName = '<div class="row"><div class="col-1"></div><div class="col-5-work"><a href="%url%">%data%</a></div>';
var HTMLschoolLocation = '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';
var HTMLschoolDegree = '<div class="row"><div class="col-2"></div><div class="col-4-work"><div class="job-title-color">%data%</div></div>';
var HTMLschoolDates = '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';
var HTMLschoolMajor = '<div class="row"><div class="col-2"></div><div class="col-4-work">Major: %data%</div><div class="col-6"></div></div>';
var HTMLschoolCoursesStart = '<div class="row"><div class="col-2"></div><div class="col-8-work">Courses:</div>'
                            + '<button onclick=\"javascript:showhide(document.getElementById(\'%school%\'))\" class="course-btn">+/-</button><div class="col-2"></div></div>'
                            + '<div id=\"%schoolId%\" style="display: none"></div>';


var HTMLschoolCourses = '<div class="row"><div class="col-3"></div><div class="col-6-course">%data%</div><div class="col-3"></div></div>';

var HTMLonlineClasses = '<h4>Online Classes</h4>';
var HTMLonlineSchool = '<div class="row"><div class="col-1"></div><div class="col-5-work"><a href="%url%">%data%</a></div>';
var HTMLonlineDates = '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';
var HTMLonlineURL = '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';
var HTMLonlineTitle = '<div class="row"><div class="col-2"></div><div class="col-4-work"><div class="job-title-color">%data%</div></div>';


var HTMLcertificationStart = '<div class="certification-entry-grid"></div>';
var HTMLcertificationName = '<div id="courseSH" class="row"><div class="col-1"></div><div class="col-5-work"><a href="">%data%</a></div>';
var HTMLcertificationDate = '<div class="col-4-work"><div class="location-text">%data%</div></div><div class="col-2"></div></div>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run.
Don't delete! It hooks up your code to the button you'll be appending.
*/
// $(document).ready(function() {
//   $('button').click(function() {
//     var iName = inName() || function(){};
//     $('#name').html(iName);
//   });
// });

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      if(job.location){
        locations.push(job.location);
      }

    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// // Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// // Vanilla JS way to listen for resizing of the window
//  // and adjust map bounds
window.addEventListener('resize', function(e) {
//   Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});


function showhide(elementIdInput) {
  if (!document.getElementById) {
    return
  }
  if (elementIdInput.style.display=="initial") {
    elementIdInput.style.display="none"
  }
  else{
    elementIdInput.style.display="initial"
  }
}



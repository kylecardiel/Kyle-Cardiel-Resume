//$("#header").append();
//$("#main").append(["Kyle Cardiel"]);
//var awesomeThoughts = "I am Kyle and I am AWESOME";
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN")
//$("#main").append(funThoughts);
//var name = "Kyle Cardiel";
//var role = "Programming Analyst";


var skills = ["Programming","Business","Teaching"];

var bio = {
	"name" : "Kyle Cardiel",
	"role" : "Programming Analyst",
	
	"contacts": {
		"mobile" : "847-917-1280",
		"email" : "kyle.cardiel@gmail.com",
		"twitter" : "https://twitter.com/KyleCardiel",
		"github" : "https://github.com/kylecardiel",
		"location" : "Chicago, IL",
	}

	"pictureURL" : "https://pbs.twimg.com/profile_images/659090458249961473/JTeo_-md.jpg",
	"welcomeMsg" : "Welcome to my page..",
	"skills" : ["Programming","Business","Teaching","coaching"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);


var work = {
	"jobs": [
	{
		"employer" : "Options Clearing Corporation",
		"title" : "Programming Analyst",
		"location" : "Chicago, IL",
		"dates" : "2014-Present",
		"description" : null,
	},
	{
		"employer" : "DeVry Education Group",
		"title" : "Auditor II",
		"location" : "Downers Grove, IL",
		"dates" : "2013-2014",
		"description" : null,
	},
	{
		"employer" : "Career Education Corporation",
		"title" : "Assoicate Auditor",
		"location" : "Schaumbrug, IL",
		"dates" : "2011-2013",
		"description" : null,
	}
	]
}

var projects = {
	"project": [
	{
		"title" : "Elevator Simulation",
		"dates" : "2015",
		"description" : "Object Oriented Software Development elvator simulation",
		"image" : null,
	},
	{
		"title" : "Trip App",
		"dates" : "2015",
		"description" : "iOS based applicaiton",
		"image" : null,
	},
	{
		"title" : "FEWD",
		"dates" : "2016",
		"description" : "under development",
		"image" : null,
	}
	]
}


//var formattedCurrentPosition = HTMLworkTitle.replace("%data%", work.currentPosition);
//var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
//var formattedYearsWorked = HTMLworkDates.replace("%data%", work.yearsWorked);
//var formattedCity = HTMLworkLocation.replace("%data%", work.city);

var education = {
	"schools": [
		{
			"name" : "DePaul University",
			"location" : "Chicago, IL",
			"degree" : "Master of Scence in Computer Science",
			"majors" : ["Software and System Development"],
			"dates" : "2014-2015",
			"url" : "www.depaul.edu",
		},
		{
			"name" : "Drake University",
			"location" : "Des Moines, IA",
			"degree" : "Bachelor of Scence in Business Administration",
			"majors" : ["Actuarial Scence","Finance"],
			"dates" : "2006-2010",
			"url" : "www.drake.edu",
		}
	]
}

//var formattedLastSchool = HTMLschoolName.replace("%data%", education["lastSchool"]);
//var formattedDegree = HTMLschoolDegree.replace("%data%", education["degree"]);
//var formattedYearsAttended = HTMLschoolDates.replace("%data%", education["yearsAttended"]);
//var formattedCitySchool = HTMLschoolLocation.replace("%data%", education["city"]);

//$("#workExperience").append(formattedCurrentPosition);
//$("#workExperience").append(formattedEmployer);
//$("#workExperience").append(formattedYearsWorked);
//$("#education").append(formattedLastSchool);
//$("#education").append(formattedDegree);
//$("#education").append(formattedCitySchool);


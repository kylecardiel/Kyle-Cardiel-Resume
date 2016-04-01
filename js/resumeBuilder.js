var bio = {
	"name" : "Kyle Cardiel",
	"role" : "Programming Analyst",
	"contacts": {
		"mobile" : "847-917-1280",
		"email" : "kyle.cardiel@gmail.com",
		"twitter" : "https://twitter.com/KyleCardiel",
		"github" : "https://github.com/kylecardiel",
		"location" : "Chicago, IL",
	},
	"pictureURL" : "https://pbs.twimg.com/profile_images/659090458249961473/JTeo_-md.jpg",
	"welcomeMsg" : "Welcome to my page..",
	"skills" : ["Programming","Business","Teaching","Coaching"]
};

bio.displayBio = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#header").append(formattedMobile);
	$("#header").append(formattedEmail);
	$("#header").append(formattedTwitter);
	$("#header").append(formattedGithub);
	$("#header").append(formattedLocation);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
}

bio.displaySkills = function() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}

bio.displayBio();
bio.displaySkills();


var work = {
	"jobs": [
	{
		"employer" : "Options Clearing Corporation",
		"title" : "Programming Analyst",
		"location" : "Chicago, IL",
		"dates" : "2014 - Present",
		"description" : "Conduct compliance, regulatory operational and SOX audits to evaluate adequacy and effectiveness of internal controls. ",
	},
	{
		"employer" : "DeVry Education Group",
		"title" : "Auditor II",
		"location" : "Downers Grove, IL",
		"dates" : "2013 - 2014",
		"description" : "Conduct compliance, regulatory operational and SOX audits to evaluate adequacy and effectiveness of internal controls. "
							+ "Provide recommendations based on isolating, identifying and solving audit issues. " 
							+ "Communicate with process owners and management by interviewing and reporting findings, observations. "
							+ "Write reports for senior management detailing audit findings, conclusions, and recommended corrective actions plans.",
	},
	{
		"employer" : "Career Education Corporation",
		"title" : "Assoicate Auditor",
		"location" : "Schaumbrug, IL",
		"dates" : "2011 - 2013",
		"description" : "Conduct compliance, regulatory operational and SOX audits to evaluate adequacy and effectiveness of internal controls. ",
	},
	{
		"employer" : "Career Education Corporation",
		"title" : "Assoicate Auditor",
		"location" : "Schaumbrug, IL",
		"dates" : "2011 - 2013",
		"description" : "Conduct compliance, regulatory operational and SOX audits to evaluate adequacy and effectiveness of internal controls. ",
	},
	{
		"employer" : "Career Education Corporation",
		"title" : "Assoicate Auditor",
		"location" : "Schaumbrug, IL",
		"dates" : "2011 - 2013",
		"description" : "Conduct compliance, regulatory operational and SOX audits to evaluate adequacy and effectiveness of internal controls. ",
	},
	{
		"employer" : "Career Education Corporation",
		"title" : "Assoicate Auditor",
		"location" : "Schaumbrug, IL",
		"dates" : "2011 - 2013",
		"description" : "Conduct compliance, regulatory operational and SOX audits to evaluate adequacy and effectiveness of internal controls. ",
	}
	]
}

work.displayWork = function () {
	
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.displayWork();

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

projects.display = function() {
	
	for (pj in projects.project){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[pj].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[pj].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[pj].description);
		//var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[pj].image);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		//$(".project-entry:last").append(formattedProjectImage);
	}

}

projects.display();

var education = {
	"schools": [
		{
			"name" : "DePaul University",
			"location" : "Chicago, IL",
			"degree" : "Master of Scence in Computer Science",
			"majors" : ["Software and System Development"],
			"dates" : "2014 - 2015",
			"url" : "www.depaul.edu",
		},
		{
			"name" : "Drake University",
			"location" : "Des Moines, IA",
			"degree" : "Bachelor of Scence in Business Administration",
			"majors" : ["Actuarial Scence","Finance"],
			"dates" : "2006 - 2010",
			"url" : "www.drake.edu",
		}
	],
	"onlineSchools": [
		{
			"title" : "Frontend Web Development",
			"school" : "Udacity",
			"dates" : "2016 - Present",
			"url" : "www.Udacity.edu",
		}
	]	
}

education.display = function() {
	
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);
	}

	for (onlineSchool in education.onlineSchools){

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineSchools[onlineSchool].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools[onlineSchool].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineSchools[onlineSchool].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineSchools[onlineSchool].url);

		$(".education-entry:last").append(HTMLonlineClasses);
		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}

}

education.display();

var certifications = {
	"certification": [
		{
			"name" : "Certified Internal Auditor (CIA)",
			"oragnization" : "Institute of Internal Auditors (IIA)",
			"id" : "xxxxxx",
			"date" : "2013",
		},
		{
			"name" : "National Youth E License",
			"oragnization" : "US Soccer",
			"id" : "xxxxxx",
			"date" : "2014",
		}
	]
}



// $("mapDiv").append(googleMap);
// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x,y);
// });

// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase();
// 		name[0].slice(1).toLowerCase();

// 	return name[0] + " " + name[1];
// }

// inName(bio.name);
// $("#main").append(internationalizeButton);








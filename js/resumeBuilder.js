var navBarButtons = {
	"navBarButton": [
	{"name" : "Home",},
	{"name" : "Resume",},
	{"name" : "Portfolio",},
	{"name" : "Fun?",},
	{"name" : "About Me",},
	{"name" : "Contact Me",},
	]
};

// Add button functionality once pages are created later...
navBarButtons.display = function() {

	var formattedNavBarButtons = '';
	for (nbb in navBarButtons.navBarButton){
		formattedNavBarButtons += HTMLnavBarButtons.replace("%data%", navBarButtons.navBarButton[nbb].name);
	}
	var formattedNavBar = HTMLnavBarButtonsStart + formattedNavBarButtons + HTMLnavBarButtonsEnd;
	$("#main").prepend(formattedNavBar);

};

navBarButtons.display();


var bio = {
	"name" : "Kyle Cardiel",
	"role" : "Programming Analyst",
	"contacts": {
		"mobile" : "847-917-1280",
		"email" : "kyle.cardiel@gmail.com",
		"twitter" : "@kylecardiel",
		"github" : "github.com/kylecardiel",
		"linkedIn" :  "linkedin.com/in/kylecardiel",
		"location" : "Chicago, IL",
	},
	"biopic" : "https://pbs.twimg.com/profile_images/659090458249961473/JTeo_-md.jpg",
	"welcomeMessage" : "Hello!  I am a Programming Analyst at the Option Clearing Corporation. I am looking to utilize my strong foundation in software design and development principals, business experience and education to translate business goals/needs into easily obtainable, reliable results. In addition, I have over 3 years of internal audit work experience including; analyzing operational processes and financial products, risk and internal control assessment, decision-making and analytical thinking.",
	"skills" : ["Object-Oriented Design & Development","- Relational Database Systems","- Java",
				"- Spring Framework","- SDLC","- SQL","- HTML","- CSS","- Javascript?",
				"- Swift/iOS/xcode","- Process Analysis","- Commmnication","- Internal control analysis"]
};

bio.display = function() {

	var data = "%data%";

	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);

	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	var formattedLinkedIn = HTMLlinkedIn.replace(data, bio.contacts.linkedIn);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

	var $header = $("#header");

	$header.prepend(formattedRole);
	$header.prepend(formattedName);

	$header.append(formattedMobile);
	$header.append(formattedEmail);
	$header.append(formattedTwitter);
	$header.append(formattedLinkedIn);
	$header.append(formattedGithub);
	$header.append(formattedLocation);
	$header.append(formattedBioPic);
	$header.append(formattedWelcomeMsg);

	//Notes: or if (bio.skills.length) {
	if (bio.skills.length > 0) {
		$header.append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

	var $footer = $("#footerContacts")
	$footer.append(formattedMobile);
	$footer.append(formattedEmail);
	$footer.append(formattedTwitter);
	$footer.append(formattedLinkedIn);
	$footer.append(formattedLocation);

};


bio.display();

var work = {
	"jobs": [
	{
		"employer" : "Options Clearing Corporation",
		"title" : "Programming Analyst",
		"location" : "Chicago, IL",
		"dates" : "November 2015 - Present",
		"description" : "SQL. Design. Integration Test. Internal Customer Commmnication...",
		"website" : "http://www.theocc.com",
	},
	{
		"employer" : "",
		"title" : "System Analyst - Intern",
		"location" : "",
		"dates" : "December 2014 - November 2015",
		"description" : "Analyze a project’s business requirements and approaches dealing with various systems. "
						+ "Facilitate communication between business end users and technical development team to ensure thorough understanding of project objectives. "
						+ "Design web application screen/layout to meet project requirements and business user needs. "
						+ "Design and execute test suites for integration testing.",
		"website" : "",
	},
	{
		"employer" : "Elite Soccer Club",
		"title" : "Trainer",
		"location" : "Arlington Heights, IL",
		"dates" : "September 2013 - Present",
		"description" : "Train/Coach Youth soccer program",
		"website" : "http://www.elitesoccer.net",
	},
	{
		"employer" : "Top Rate Tutors",
		"title" : "Math Tutor, Algebra - Calculus",
		"location" : "Winnetka, IL",
		"dates" : "August 2012 - Present",
		"description" : "Ensure students understand major concepts and practical application of math principals",
		"website" : "http://www.topratetutors.com",
	},
	{
		"employer" : "DeVry Education Group",
		"title" : "Auditor II",
		"location" : "Downers Grove, IL",
		"dates" : "November 2013 - September 2014",
		"description" : "Conduct compliance, regulatory operational and SOX audits to evaluate adequacy and effectiveness of internal controls. "
							+ "Provide recommendations based on isolating, identifying and solving audit issues. "
							+ "Communicate with process owners and management by interviewing and reporting findings, observations. "
							+ "Write reports for senior management detailing audit findings, conclusions, and recommended corrective actions plans.",
		"website" : "http://www.devryeducationgroup.com",
	},
	{
		"employer" : "Career Education Corporation",
		"title" : "Assoicate Auditor",
		"location" : "Schaumbrug, IL",
		"dates" : "June 2012 – November 2013",
		"description" : "Conduct post-secondary school and company operational audits to evaluate adequacy and effectiveness of internal controls. "
							+ "Provide recommendations based on isolating, identifying and solving audit issues. "
							+ "Communicate with school’s upper management by reporting findings, observations and an audit summary. "
							+ "Write reports for senior management detailing audit findings, conclusions, and recommended corrective actions plans. "
							+ "Perform Entity-Level Control testing for compliance with Sarbanes Oxley section 404. "
							+ "Assisted in special fraud investigations, including; collecting, analyzing, and reporting findings to senior audit management. "
							+ "Developing a website to centralize, organize Company and department policies and procedures. "
							+ "Obtained greater knowledge of post-secondary educational operations and industry from recruiting through post graduation career placement.",
		"website" : "http://www.careered.com",
	},
	{
		"employer" : "",
		"title" : "Staff Auditor",
		"location" : "",
		"dates" : "February 2011 – June 2012",
		"description" : "",
		"website" : "",
	}
	]
};

work.display = function () {
	$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs){
		var data = "%data%";
		var currentJob = work.jobs[job];

		var formattedEmployer;
		if (work.jobs[job].employer.length > 0){
			formattedEmployer = "<hr>" + HTMLworkEmployer.replace(data, currentJob.employer).replace("%url%", currentJob.website);
		} else {
			formattedEmployer = HTMLworkEmployer.replace(data, currentJob.employer).replace("%url%", currentJob.website);
		}

		var formattedLocation = HTMLworkLocation.replace(data, currentJob.location);
		var formattedEmployerInfo = formattedEmployer + formattedLocation;

		var formattedTitle = HTMLworkTitle.replace(data, currentJob.title);
		var formattedDates = HTMLworkDates.replace(data, currentJob.dates);
		var formattedPositionInfo = formattedTitle + formattedDates;

		var formattedDescription = HTMLworkDescription.replace(data, currentJob.description);

		var $workEntryGridLast = $(".work-entry-grid:last");

		$workEntryGridLast.append(formattedEmployerInfo);
		$workEntryGridLast.append(formattedPositionInfo);
		$workEntryGridLast.append(formattedDescription);
	}
};

work.display();

var projects = {
	"projects": [
	{
		"title" : "Elevator Simulation",
		"dates" : "2015",
		"description" : "Object Oriented Software Development elvator simulation",
		"images" : "null"
	},
	{
		"title" : "Trip App",
		"dates" : "2015",
		"description" : "iOS based applicaiton",
		"images" : "null"
	},
	{
		"title" : "FEWD",
		"dates" : "2016",
		"description" : "under development",
		"images" : "null"
	}
	]
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (pj in projects.projects){
		var data = "%data%";
		var currentPJ = projects.projects[pj];

		var formattedProjectTitle = HTMLprojectTitle.replace(data, currentPJ.title);
		var formattedProjectDates = HTMLprojectDates.replace(data, currentPJ.dates);
		var formattedProjectInfo = formattedProjectTitle + formattedProjectDates;

		var formattedProjectDescription = HTMLprojectDescription.replace(data, currentPJ.description);

		var $porjEntryGridLast = $(".project-entry-grid:last");

		$porjEntryGridLast.append(formattedProjectInfo);
		$porjEntryGridLast.append(formattedProjectDescription);
	}

};

projects.display();

var education = {
	"schools": [
		{
			"name" : "DePaul University",
			"location" : "Chicago, IL",
			"degree" : "Master of Scence in Computer Science",
			"majors" : ["Software and System Development"],
			"date" : "September 2014 - November 2015",
			"website" : "http://www.depaul.edu",
			"courses" : ["Discrete Structures for CS",
							"Introduction to Programming (Python)",
							"Data Structures I (Java, Eclipse)",
							"Data Structures II (Java, Eclipse)",
							"Systems I (C)",
							"Systems II (C)",
							"Applied Algorithms and Structures (Java, Eclipse)",
							"Data Analysis and Regression (SAS)",
							"Distributed Systems I (Java, Eclipse)",
							"Framework for Web Application Development (TBD)",
							"Programming Language Concepts (Scheme, Scala)",
							"Database Technologies (SQL)",
							"Mobile Application Development of iOS (Swift, Xcode)",
							"Graduate Internship",
							"Object Oriented Modeling",
							"Software Testing and Quality Assurance (Java, Eclipse)",
							"Object Oriented Software Development (Java, Eclipse)",
							"Enterprise Component Architecture (Java EE, Glassfish, Netbeans)"]
		},
		{
			"name" : "Drake University",
			"location" : "Des Moines, IA",
			"degree" : "Bachelor of Scence in Business Administration",
			"majors" : ["Actuarial Scence","Finance"],
			"date" : "August 2006 - May 2010",
			"website" : "http://www.drake.edu",
			"courses" : ["Introduction to Probability I (Exam P)",
							" Introduction to Probability II (Exam C)",
							"Statistical Modeling and Data Analysis I (Exam C)",
							"Statistical Modeling and Data Analysis II (Exam C)",
							"Theory of Interest (Exam FM)",
							"Life Insurance Math I (Exam MLC)",
							"Life Insurance Math II (Exam MLC)",
							"Credibility and Simulation (Exam C)",
							"Corporate Finance",
							"Advance Corporate Finance",
							"Financial Institutions, Instruments, and Markets",
							"Financial Institution Management",
							"Derivatives Mathematics (Exam MFE)",
							"Portfolio Analysis",
							"Introduction to Accounting I",
							"Introduction to Accounting II",
							"Principals of Marcoeconomics",
							"Principals of Mircoeconomics",
							"Money and Banking",
							"Information Systems and E-Commerce",
							"Management of Operations",
							"Marketing Prinicpals",
							"Linear Algebra",
							"Calculus III"]
		}
	],
	"onlineCourses": [
		{
			"title" : "Frontend Web Development Nano-Degree",
			"school" : "Udacity",
			"date" : "2016 - Present",
			"website" : "www.Udacity.com",
		}
	]
};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		var data = "%data%";
		var currentSchool = education.schools[school];

		var formattedSchoolName = HTMLschoolName.replace(data, currentSchool.name).replace("%url%", currentSchool.website);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data, currentSchool.location);
		var formattedSchoolInfo = formattedSchoolName + formattedSchoolLocation;

		var formattedSchoolDegree = HTMLschoolDegree.replace(data, currentSchool.degree);
		var formattedSchoolDates = HTMLschoolDates.replace(data, currentSchool.date);
		var formattedDegreeInfo = formattedSchoolDegree + formattedSchoolDates;
		var formattedschoolMajor = HTMLschoolMajor.replace(data, currentSchool.majors);

		var $edEntryGridLast = $(".education-entry-grid:last");

		$edEntryGridLast.append(formattedSchoolInfo);
		$edEntryGridLast.append(formattedDegreeInfo);
		$edEntryGridLast.append(formattedschoolMajor);

		var courseIdTag = currentSchool.name.substring(0, 3).toLowerCase();

		var formattedShoolCoursesStart = HTMLschoolCoursesStart.replace("%school%", courseIdTag).replace("%schoolId%", courseIdTag);
		$(".education-entry-grid").append(formattedShoolCoursesStart);
		for (course in education.schools[school].courses){
			var fromattedSchoolCourses = HTMLschoolCourses.replace(data, currentSchool.courses[course])
			var $courseIdTag = "#" + courseIdTag
			$($courseIdTag).append(fromattedSchoolCourses);
		}

	}

	$(".education-entry-grid:last").append(HTMLonlineClasses);
	for (onlineSchool in education.onlineCourses){
		var data = "%data%";
		var currentOnlineSchool = education.onlineCourses[onlineSchool];

		var formattedOnlineSchool = HTMLonlineSchool.replace(data, currentOnlineSchool.school);
		var formattedOnlineURL = HTMLonlineURL.replace(data, currentOnlineSchool.url);
		var formattedOnlineSchoolInfo = formattedOnlineSchool + formattedOnlineURL;

		var formattedOnlineTitle = HTMLonlineTitle.replace(data, currentOnlineSchool.title);
		var formattedOnlineDates = HTMLonlineDates.replace(data, currentOnlineSchool.date);
		var formattedOnlineDegreeInfo = formattedOnlineTitle + formattedOnlineDates

		$(".education-entry-grid:last").append(formattedOnlineSchoolInfo);
		$(".education-entry-grid:last").append(formattedOnlineDegreeInfo);
	}

};

education.display();

//Add certifications section later..

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
$("#mapDiv").append(googleMap);


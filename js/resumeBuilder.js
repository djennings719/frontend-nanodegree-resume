/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name":"Daniel Jennings",
    "role":"Unity Developer",
    "contacts": {
        "mobile":"719.220.0437",
        "email":"djenningsais@gmail.com",
        "portfolio":"https://djennings719.github.io",
        "github":"https://github.com/djennings719",
        "linkedIn":"https://www.linkedin.com/in/danieljennings/",
        "location":"Houston, TX"
    },
    "welcomeMessage":"Greetings",
    "skills":["Unity", "C#"],
    "biopic": "",
    "display":""
}

var education = {
    "schools": [
        {"name":"California State University-Hayward",
        "location":"Hayward, CA",
        "degree":"BS",
        "majors":["Computer Science"],
        "minors":["Mathematics"],
        "dates":"06/2000-06/2006",
        "url":"http://www.csueastbay.edu/"}
    ],
    "onlineCourses": [{
        "title":"",
        "school":"",
        "dates":"",
        "url":""
    }],
    "display":""
}

var work = {
    "jobs": [
        {
            "employer":"a.i. solutions Inc.",
            "title":"Sr Software Engineer",
            "location":"Houston, TX",
            "dates":"07/2012 - Present",
            "description":"Working with the NASA customer to implement JAVA Swing applications for upcoming exploration missions."},
        {
            "employer":"ISYS TECHNOLOGIES",
            "title":" Software Engineer",
            "location":"Colorado Springs, CO",
            "dates":"12/2010 - 07/2012",
            "description":"Working with the Air Force customer to implement upgrades to JAVA Web application."}
    ],
    "display":""
}

var projects = {
    "projects": [{
        "title":"",
        "dates":"",
        "description":"",
        "images":""
    }],
    "display":function(){

    }
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedCellPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedPortfolio = HTMLportfolio.replace("%data%", bio.contacts.portfolio);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedIn);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);


var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

//var formattedEmployerName0 = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
//var formattedEmployerTitle0 = HTMLworkTitle.replace("%data%", work.jobs[0].title);
//var formattedEmployerLocation0 = HTMLworkLocation.replace("%data%", work.jobs[0].location);
//var formattedEmployerDates0 = HTMLworkDates.replace("%data%", work.jobs[0].dates);
//var formattedEmployerDescription0 = HTMLworkDescription.replace("%data%", work.jobs[0].description);

var formattedSchoolName0 = HTMLschoolName.replace("%data%", education.schools[0].name);
var degreeMajor = education.schools[0].degree + " - " + education.schools[0].majors[0];
var formattedSchoolDegree0 = HTMLschoolDegree.replace("%data%", education.schools[0].degree );
var formattedSchoolMajor0 = HTMLschoolMajor.replace("%data%", education.schools[0].majors[0]);
var formattedSchoolLocation0 = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedSchoolDates0 = HTMLschoolDates.replace("%data%", education.schools[0].dates);

if(bio.skills.length > 0){
    $('#header').append(formattedName);
    $('#header').append(HTMLskillsStart);

    $('#skills').append(formattedSkills);
}
//$('#header').prepend(formattedRole);
//$('#header').prepend(formattedName);
//
//$('#topContacts').append(formattedCellPhone);
//$('#topContacts').append(formattedEmail);
//$('#topContacts').append(formattedPortfolio);
//$('#topContacts').append(formattedGithub);
//$('#topContacts').append(formattedLinkedIn);
//
//$('#workExperience').append("Test work experience");
//$('#workExperience').append(formattedEmployerTitle0);
//
//$('#education').append("Test education");
//$('#education').append(formattedSchoolName0);

function displayWork(){
    for(var job in work.jobs){
        //if(work.jobs[job].hasOwnProperty(job)) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployerName = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedEmployerDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedEmployerDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedEmploymentInfo = formattedEmployerName +
            formattedTitle + formattedEmployerLocation +
            formattedEmployerDates + formattedEmployerDescription;
        $(".work-entry:last").append(formattedEmploymentInfo);
        //}
    }
}

displayWork();

function inName(first, last){
    var firstName = first.charAt(0).toUpperCase() + first.substring(1,first.length).toLowerCase();
    var lastName = last.toUpperCase();
    return firstName + " " + lastName;
}

function inName(fullName){
    var splitNames = fullName.split(" ");
    var firstName = splitNames[0].charAt(0).toUpperCase() + splitNames[0].substring(1,splitNames[0].length).toLowerCase();
    var lastName = splitNames[1].toUpperCase();
    return firstName + " " + lastName;
}
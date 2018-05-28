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
        "twitter":"",
        "linkedIn":"https://www.linkedin.com/in/danieljennings/",
        "location":"Houston, TX"
    },
    "welcomeMessage":"Greetings",
    "skills":["Unity", "C#", "JAVA", "SWING", "JavaScript"],
    "biopic": "images/fry.jpg",
    "display":function(){
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        var formattedCellPhone = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedPortfolio = HTMLportfolio.replace("%data%", this.contacts.portfolio);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLinkedIn = HTMLlinkedin.replace("%data%", this.contacts.linkedIn);
        var formattedBioLocation = HTMLlocation.replace("%data%", this.contacts.location);

        var formattedContactInfo = formattedCellPhone + formattedEmail + formattedPortfolio + formattedGithub + formattedLinkedIn + formattedBioLocation;
        $('#topContacts').append(formattedContactInfo);

        var formattedBioPic = HTMLbioPic.replace("%data%",this.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        var formattedHeaderPrepend = formattedName + formattedRole;
        var formattedHeaderAppend = formattedBioPic;

        formattedHeaderAppend += formattedWelcomeMessage;
        formattedHeaderAppend += HTMLskillsStart;
        for(var i = 0; i < this.skills.length; i++){
            var formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
            formattedHeaderAppend += formattedSkills;
        }
        $('#header').prepend(formattedHeaderPrepend).append(formattedHeaderAppend);
    }
}

var education = {
    "schools": [
        {
            "name":"California State University-Hayward",
            "location":"Hayward, CA",
            "degree":"BS",
            "majors":["Computer Science", "Economics"],
            "minors":["Mathematics"],
            "dates":"06/2000-06/2006",
            "url":"http://www.csueastbay.edu/"
        },
        {
            "name":"California Polytechnic State University-San Luis Obispo",
            "location":"San Luis Obispo, CA",
            "degree":"",
            "majors":["Computer Science"],
            "minors":["Mathematics", "Theater Arts"],
            "dates":"09/2001-03/2004",
            "url":"https://www.calpoly.edu/"}
    ],
    "onlineCourses": [
        {
            "title":"Front-End Web Developer Nanodegree",
            "school":"Udacity",
            "dates":"May 2018 - Present",
            "url":"https://www.udacity.com/"
        },
        {
            "title":"The Ultimate Guide to Cinematography with Unity",
            "school":"Udemy",
            "dates":"April 2018 - Present",
            "url":"https://www.udemy.com/"
        }
    ],
    "display":function(){
        for(var i = 0; i < this.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name);
            var formattedSchoolDegree = "";
            //check if the Degree string is empty - if it is then don't add dashes
            if(this.schools[i].degree.length != "") {
                formattedSchoolDegree += HTMLschoolDegree.replace("%data%", this.schools[i].degree);
            }
            else{
                formattedSchoolDegree = HTMLschoolDegree.replace(" -- %data%", this.schools[i].degree);
            }

            if(this.schools[i].majors.length != 0){
                var formattedMajors = "";
                for(var j = 0; j < this.schools[i].majors.length;j++){
                    if(j > 0){
                        formattedMajors += ", ";
                    }
                    formattedMajors += this.schools[i].majors[j];
                }
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", formattedMajors);
            }
            if(this.schools[i].minors.length != 0){
                var formattedMinors = "";
                for(var j = 0; j < this.schools[i].minors.length;j++){
                    if(j > 0){
                        formattedMinors += ", ";
                    }
                    formattedMinors += this.schools[i].minors[j];
                }
                var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", formattedMinors);
            }

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);

            var formattedSchoolEntry = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor + formattedSchoolMinor;

            $('.education-entry:last').append(formattedSchoolEntry);
        }
        var formattedOnlineCoursesString = "";
        for(var i = 0; i < this.onlineCourses.length; i++){
            if(i == 0){
                formattedOnlineCoursesString += HTMLonlineClasses;
            }
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);

            formattedOnlineCoursesString += formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
        }
        $('.education-entry:last').append(formattedOnlineCoursesString);
    }
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
    "display": function () {
        for(var i = 0; i < this.jobs.length; i++){
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployerName = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
            var formattedEmployerLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
            var formattedEmployerDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
            var formattedEmployerDescription = HTMLworkDescription.replace("%data%", this.jobs[i].description);

            var formattedEmploymentInfo = formattedEmployerName +
                formattedTitle + formattedEmployerLocation +
                formattedEmployerDates + formattedEmployerDescription;
            $(".work-entry:last").append(formattedEmploymentInfo);
        }
    }
}

var projects = {
    "projects": [
        {
            "title":"JAVA SWING Development",
            "dates":"October 2015 - Present",
            "description":"Developed new JAVA SWING applications for the NASA customer.",
            "images":""
        },
        {
            "title":"C# WPF Development",
            "dates":"June 2015 - October 2015",
            "description":"Fixed previous implementation of C#/WPF application.",
            "images":""
        }
    ],
    "display":function(){
        for(var i = 0; i < this.projects.length; i++){
            $('#projects').append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
            var formattedProjectImages;
            var formattedProjectString = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;

            $('.project-entry:last').append(formattedProjectString);

        }
    }
}


bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
initializeMap();
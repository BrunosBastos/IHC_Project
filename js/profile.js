let seekers;
let recruiters;
let current_user;
let applications;
let current_profile;
let current_job;
let user_type;
$(document).ready(function () {
    seekers = JSON.parse(localStorage.getItem("seekers"));
    recruiters = JSON.parse(localStorage.getItem("recruiters"));
    applications = JSON.parse(localStorage.getItem("applications"));
    current_user = localStorage.getItem("current_user");
    current_profile = {"educationLevel": "Bachelor’s Degree", "name":"Leandro Silva", "dataNasc":"26/06/2000", "city":"Aveiro", "address":"Rua D. Joana", "email":"leandro@gmail.com", "password":"passpass", "phoneNumber":"929876543", "description":"degree in computer science", "type":"Software & Web"}
    current_job = JSON.parse(localStorage.getItem("current_offer"));


    // sees if the user seeing the profile is a seeker
    for (let i = 0; i < seekers.length; i++) {
        if (current_user.localeCompare(seekers[i].email) == 0) {
            user_type = "seeker";
        }
    }

    // if it is not a seeker check if it is a recruiter
    if (user_type != "seeker") {
        for (let i = 0; i < recruiters.length; i++) {
            if (current_user.localeCompare(recruiters[i].email) == 0) {
                user_type = "recruiter";
            }
        }
    } else {
        console.log("wtf")
    }


    for (let i = 0; i < applications.length; i++) {
        if (applications[i].email.localeCompare(current_profile.email) == 0 && applications[i].id == current_job.id) {
            if (applications[i].status.localeCompare("A")==0) {
                localStorage.setItem("applications", JSON.stringify(applications));
                $("#acceptButton").text("Accepted")
                $("#acceptButton").removeClass("info");
                $("#acceptButton").addClass("btn-success");
                $("#acceptButton").addClass("disabled")
                $("#rejectButton").hide()
                break;
            }
            if (applications[i].status.localeCompare("R")==0) {
                localStorage.setItem("applications", JSON.stringify(applications));
                $("#rejectButton").text("Rejected")
                $("#rejectButton").addClass("disabled")
                $("#acceptButton").hide()
                break;
            }
        }
    }

    $("#acceptButton").click(function () {
        for (let i = 0; i < applications.length; i++) {
            if (applications[i].email.localeCompare(current_profile.email) == 0 && applications[i].id == current_job.id) {
                applications[i].status = "A";
                localStorage.setItem("applications", JSON.stringify(applications));
                break;
            }
        }
        $("#acceptButton").text("Accepted")
        $("#acceptButton").removeClass("info");
        $("#acceptButton").addClass("btn-success");
        $("#acceptButton").addClass("disabled")
        $("#rejectButton").hide()
    })

    $("#rejectButton").click(function () {
        for (let i = 0; i < applications.length; i++) {
            if (applications[i].email.localeCompare(current_profile.email) == 0 && applications[i].id == current_job.id) {
                applications[i].status = "R";
                localStorage.setItem("applications", JSON.stringify(applications));
                break;
            }
        }
        $("#rejectButton").text("Rejected")
        $("#rejectButton").addClass("disabled")
        $("#acceptButton").hide()
    })

    $("#editProfile").click(function () {

    });

    $("#saveChanges").click(function () {


    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

function MyViewModel() {
    var self = this;
    self.profile = ko.observable({"educationLevel": "Bachelor’s Degree", "name":"Leandro Silva", "dataNasc":"26/06/2000", "city":"Aveiro", "address":"Rua D. Joana", "email":"leandro@gmail.com", "password":"passpass", "phoneNumber":"929876543", "description":"degree in computer science", "type":"Software & Web"})

    self.isSeeker = ko.observable(self.profile().email.localeCompare(localStorage.getItem("current_user")) == 0)
    self.isRecruiter = ko.observable(!self.isSeeker())

    self.educationLevel = ko.observable(self.profile().educationLevel)
    self.name = ko.observable(self.profile().name)
    self.dataNasc = ko.observable(self.profile().dataNasc)
    self.city = ko.observable(self.profile().city)
    self.address = ko.observable(self.profile().address)
    self.email = ko.observable(self.profile().email)
    self.password = ko.observable(self.profile().password)
    self.phoneNumber = ko.observable(self.profile().phoneNumber)
    self.description = ko.observable(self.profile().description)
    self.type = ko.observable(self.profile().type)
    self.isDesc = ko.observable(self.description().localeCompare(''))
}
ko.applyBindings(new MyViewModel());
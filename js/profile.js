function MyViewModel() {
    var self = this;
    self.profile = ko.observable()
    self.educationLevel = ko.observable()
    self.name = ko.observable()
    self.dataNasc = ko.observable()
    self.city = ko.observable()
    self.address = ko.observable()
    self.email = ko.observable()
    self.password = ko.observable()
    self.phoneNumber = ko.observable()
    self.description = ko.observable()
    self.type = ko.observable()
    self.isDesc = ko.observable()

    self.setProfile = function (profile) {
        self.profile(profile)
        self.educationLevel(self.profile().educationLevel)
        self.name(self.profile().name)
        self.dataNasc(self.profile().dataNasc)
        self.city(self.profile().city)
        self.address(self.profile().address)
        self.email(self.profile().email)
        self.password(self.profile().password)
        self.phoneNumber(self.profile().phoneNumber)
        self.description(self.profile().description)
        self.type(self.profile().type)
        self.isDesc(self.description().localeCompare(''))
    }
}
var vm = new MyViewModel()
ko.applyBindings(vm);


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
    current_user = localStorage.getItem("current_user");
    applications = JSON.parse(localStorage.getItem("applications"));

    // sees if the user seeing the profile is a seeker
    for (let i = 0; i < seekers.length; i++) {
        if (current_user.localeCompare(seekers[i].email) == 0) {
            user_type = "seeker";
            $("#reject").hide()
            $("#accept").hide()
            $(".recr-nav").parent().remove()
            $("#headerProf").text("Your Account")
            current_profile = seekers[i]
            break
        }
    }

    // if it is not a seeker check if it is a recruiter
    if (user_type != "seeker") {
        for (let i = 0; i < recruiters.length; i++) {
            if (current_user.localeCompare(recruiters[i].email) == 0) {
                user_type = "recruiter";
                $("#editProfileButton").hide()
                $(".seek-nav").parent().remove()
                current_profile = JSON.parse(localStorage.getItem("current_profile"))
                current_job = JSON.parse(localStorage.getItem("current_offer"));
                $("#headerProf").text(current_job.role)
                for (let i = 0; i < applications.length; i++) {
                    if (applications[i].email.localeCompare(current_profile.email) == 0 && applications[i].id == current_job.id) {
                        if (applications[i].status.localeCompare("A") == 0) {
                            localStorage.setItem("applications", JSON.stringify(applications));
                            $("#accept").text("Accepted")
                            $("#accept").removeClass("info");
                            $("#accept").addClass("btn-success");
                            $("#accept").addClass("disabled")
                            $("#reject").hide()
                            break;
                        }
                        if (applications[i].status.localeCompare("R") == 0) {
                            localStorage.setItem("applications", JSON.stringify(applications));
                            $("#reject").text("Rejected")
                            $("#reject").addClass("disabled")
                            $("#accept").hide()
                            break;
                        }
                    }
                }
            }
        }
    } else {
        //console.log("wtf")
    }

    vm.setProfile(current_profile)

    $("#acceptButton").click(function (e) {
        e.preventDefault();
        for (let i = 0; i < applications.length; i++) {
            if (applications[i].email.localeCompare(current_profile.email) == 0 && applications[i].id == current_job.id) {
                applications[i].status = "A";
                localStorage.setItem("applications", JSON.stringify(applications));
                break;
            }
        }
        $("#accept").text("Accepted")
        $("#accept").removeClass("info");
        $("#accept").addClass("btn-success");
        $("#accept").addClass("disabled")
        $("#reject").hide()
    })

    $("#rejectButton").click(function (e) {
        e.preventDefault();
        for (let i = 0; i < applications.length; i++) {
            if (applications[i].email.localeCompare(current_profile.email) == 0 && applications[i].id == current_job.id) {
                applications[i].status = "R";
                localStorage.setItem("applications", JSON.stringify(applications));
                break;
            }
        }
        $("#reject").text("Rejected")
        $("#reject").addClass("disabled")
        $("#accept").hide()
    })

    $("#editProfile").click(function () {

    });

    $("#saveChanges").click(function () {


    });

});
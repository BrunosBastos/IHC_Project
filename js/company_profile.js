function MyViewModel() {
    var self = this;
    self.profile = ko.observable()
    self.name = ko.observable()
    self.city = ko.observable()
    self.address = ko.observable()
    self.email = ko.observable()
    self.phoneNumber = ko.observable()
    self.description = ko.observable()
    self.isDesc = ko.observable()

    self.setProfile = function (profile) {
        self.profile(profile)
        self.name(self.profile().name)
        self.city(self.profile().city)
        self.address(self.profile().address)
        self.email(self.profile().email)
        self.phoneNumber(self.profile().phone)
        self.description(self.profile().description)
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

    recruiters = JSON.parse(localStorage.getItem("recruiters"));
    current_user = localStorage.getItem("current_user");

    // if it is not a seeker check if it is a recruiter
    for (let i = 0; i < recruiters.length; i++) {
        if (current_user.localeCompare(recruiters[i].email) == 0) {
            current_profile = recruiters[i]
            $("#headerProf").text("Your Company Account")
        }
    }
    vm.setProfile(current_profile)


    $("#editProfile").click(function () {

    });

    $("#saveChanges").click(function () {


    });

});
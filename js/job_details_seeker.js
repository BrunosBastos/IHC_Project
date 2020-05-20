function MyViewModel() {
    var self = this;
    self.offer = ko.observable(JSON.parse(localStorage.getItem("current_offer")));
    self.id = ko.observable(self.offer().id)
    self.email = ko.observable(self.offer().email)
    self.date = ko.observable(self.offer().date)
    self.role = ko.observable(self.offer().role)
    self.city = ko.observable(self.offer().city)
    self.address = ko.observable(self.offer().address)
    self.category = ko.observable(self.offer().category)
    self.jobNature = ko.observable(self.offer().jobNature)
    self.salary = ko.observable(self.offer().salary)
    self.vacancy = ko.observable(self.offer().vacancy)
    self.description = ko.observable(self.offer().description)
    self.isDesc = ko.observable(self.description().localeCompare(''))
}
ko.applyBindings(new MyViewModel());

(function ($) {
    $(document).ready(function () {
        var scroll2candidates;

        //if ()

        $(".js-candidates").click(function (e) {
            // Prevent a page reload when a link is pressed
            e.preventDefault();

            // Scroll
            $('html,body').animate({
                scrollTop: 300
            }, 'slow');
        });

        var applications = JSON.parse(localStorage.getItem("applications"))
        var current_user = localStorage.getItem("current_user")
        var current_offer = JSON.parse(localStorage.getItem("current_offer"))
        var applied = false
        var accepted = false
        var rejected = false

        for (i = 0; i < applications.length; i++) {
            if (applications[i].email.localeCompare(current_user) == 0) {
                if (applications[i].id == current_offer.id) {
                    applied = true;
                    if (applications[i].status == "A") {
                        accepted = true
                    } else {
                        if (applications[i].status == "R") {
                            rejected = true
                        }
                    }
                }
            }
        }

        if (!rejected) {
            if (accepted) {
                $("#applyButton").text("Accepted")
                $("#applyButton").removeClass("info");
                $("#applyButton").addClass("btn-success");
                $("#applyButton").addClass("disabled")
            } else {
                if (applied) {
                    $("#applyButton").removeClass("info");
                    $("#applyButton").addClass("danger");
                    $("#applyButton").text("Unapply")
                } else {
                    $("#applyButton").removeClass("danger");
                    $("#applyButton").addClass("info");
                    $("#applyButton").text("Apply")
                }
            }
        } else {
            $("#applyButton").text("Rejected")
            $("#applyButton").removeClass("info");
            $("#applyButton").addClass("danger");
            $("#applyButton").addClass("disabled")
        }
    })

    $("#applyButton").click(function () {
        if (!($("#applyButton").hasClass("disabled"))) {
            var applications = JSON.parse(localStorage.getItem("applications"))
            var current_user = localStorage.getItem("current_user")
            var current_offer = JSON.parse(localStorage.getItem("current_offer"))
            var applied = false
            var toDel

            for (i = 0; i < applications.length; i++) {
                if (applications[i].email.localeCompare(current_user) == 0) {
                    if (applications[i].id == current_offer.id) {
                        toDel = i
                        applied = true;
                    }
                }
            }

            if (applied) {
                $("#applyButton").removeClass("danger");
                $("#applyButton").addClass("info");
                $("#applyButton").text("Apply")
                var newArray = []
                for (i=0; i<applications.length; i++) {
                    if (i!=toDel) {
                        newArray.push(applications[i])
                    }
                }
                applications = newArray;
            } else {
                $("#applyButton").removeClass("info");
                $("#applyButton").addClass("danger");
                $("#applyButton").text("Unapply")
                var d = new Date();
                applications.push({ "email": current_user, "id": current_offer.id, "status": "P", "date": d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() })
            }

            localStorage.setItem("applications", JSON.stringify(applications))
            console.log(applications)
        }
    })
})(jQuery);
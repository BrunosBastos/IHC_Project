function MyViewModel() {
    var self = this;
    self.offers = ko.observableArray(JSON.parse(localStorage.getItem("offers")));
    self.applications = ko.observableArray(JSON.parse(localStorage.getItem("applications")))

    self.goToJobDetails = function (offer) {
        localStorage.setItem("current_offer", JSON.stringify(offer))
        window.location.href = "./job_details_seeker.html"
    }

    self.status = function (offer) {
        console.log(offer)
        for (i = 0; i < self.applications().length; i++) {
            if (offer.id == self.applications()[i].id & localStorage.getItem("current_user").localeCompare(self.applications()[i].email) == 0) {
                if (self.applications()[i].status.localeCompare("A") == 0) {
                    return "Accepted"
                } else {
                    if (self.applications()[i].status.localeCompare("R") == 0) {
                        return "Rejected"
                    }
                }
            }
        }
        return "Pending"
    }

    self.styleclass = function (offer) {
        for (i = 0; i < self.applications().length; i++) {
            if (offer.id == self.applications()[i].id & localStorage.getItem("current_user").localeCompare(self.applications()[i].email) == 0) {
                if (self.applications()[i].status.localeCompare("A") == 0) {
                    return "Accepted"
                } else {
                    if (self.applications()[i].status.localeCompare("R") == 0) {
                        return "Rejected"
                    }
                }
            }
        }
        return "Pending"
    }

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
    })
})(jQuery);
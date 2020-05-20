function MyViewModel() {
    var self = this;
    self.originOffers = ko.observableArray(JSON.parse(localStorage.getItem("offers")));
    self.offers = ko.observableArray();
    for (i=0; i< self.originOffers().length; i++) {
        if (self.originOffers()[i].email.localeCompare(localStorage.getItem("current_user"))==0) {
            console.log(self.originOffers()[i])
            self.offers().push(self.originOffers()[i])
        }
    }
    console.log(self.offers())

    self.goToJobDetails = function(offer) {
        localStorage.setItem("current_offer", JSON.stringify(offer))
        window.location.href = "./job_details_recruiter.html#candidates"
    }
}
ko.applyBindings(new MyViewModel());

(function ($) {
    $(document).ready(function(){
        var scroll2candidates;

        //if ()

        $(".js-candidates").click(function(e){
            // Prevent a page reload when a link is pressed
            e.preventDefault();

            // Scroll
            $('html,body').animate({
                scrollTop: 300
            }, 'slow');
        });
    })
})(jQuery);
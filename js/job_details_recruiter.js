function MyViewModel() {
    var self = this;
    self.offer = ko.observable(JSON.parse(localStorage.getItem("current_offer")));
    console.log(self.offer())
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
    $(document).ready(function(){
        //if ()
        $("#sort-order").click(function(){
            $("#sort-order").children().toggleClass("ti-angle-down");
            $("#sort-order").children().toggleClass("ti-angle-up");
        });


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
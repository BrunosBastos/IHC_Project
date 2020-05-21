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

    self.candidateDetails = function() {
        localStorage.setItem("current_profile", JSON.stringify({"educationLevel": "High School Diploma or Equivalent","name":"Leonardo Lenny", "dataNasc":"25/05/1976", "city":"Nápoles", "address":"Viale della libertà", "email":"lenny@gmail.com", "password":"passpass", "phoneNumber":"923456789", "description":"- Experient in cooking", "type":"Others"}))
        window.location.href = "./profile.html"
    }
}
ko.applyBindings(new MyViewModel());

(function ($) {
    $(document).ready(function(){
        var flag = false;
        //if ()
        $("#sort-order").click(function(){
            if (flag) {
                $("#sort-order").html('Asc <i class="ti-bar-chart"></i>');
                flag = false;
            } else {
                $("#sort-order").html('Desc <i class="ti-bar-chart-alt"></i>');
                flag = true;
            }
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
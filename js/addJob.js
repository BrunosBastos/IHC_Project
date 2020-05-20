(function ($) {
    $("#SignInButton").click(function () {
        var role = $("#CreateJobRole").val()
        var city = $("#CreateJobCity").val()
        var address = $("#CreateJobAddress").val()
        var category = $("#CreateJobCategory").val()
        var jobNature = $("#CreateJobNature").val()
        var salary = $("#CreateJobSalary").val()
        var vacancy = $("#CreateJobVacancy").val()
        var description = $("#CreateJobDescription").val()
        let flag = true;
        var id = "";

        if (role.length == 0 || role.length > 250) {
            $("#AJInvalidRole").html(  "Please insert a Role. ");
            $("#AJInvalidRole").removeClass("d-none");
            $("#CreateJobRole").removeClass("is-valid");
            $("#CreateJobRole").addClass("is-invalid");

            if (flag) id = "#CreateJobRole";
            flag = false;

        } else {
            $("#AJInvalidRole").addClass("d-none");
            $("#CreateJobRole").removeClass("is-invalid");
            $("#CreateJobRole").addClass("is-valid");
        }

        if (city.length == 0 || city.length > 250) {

            $("#AJInvalidCity").removeClass("d-none");
            $("#CreateJobCity").removeClass("is-valid");
            $("#CreateJobCity").addClass("is-invalid");
            $("#AJInvalidCity").html ("Please insert a City.");

            if (flag) id = "#CreateJobCity";
            flag = false;

        } else {
            $("#AJInvalidCity").addClass("d-none");
            $("#CreateJobCity").removeClass("is-invalid");
            $("#CreateJobCity").addClass("is-valid");
        }

        if (address.length == 0 || address.length > 350) {

            $("#AJInvalidAddress").removeClass("d-none");
            $("#CreateJobAddress").removeClass("is-valid");
            $("#CreateJobAddress").addClass("is-invalid");
            $("#AJInvalidAddress").html( "Please insert an address.");

            if (flag) id = "#CreateJobAddress";
            flag = false;

        } else {
            $("#AJInvalidAddress").addClass("d-none");
            $("#CreateJobAddress").removeClass("is-invalid");
            $("#CreateJobAddress").addClass("is-valid");
        }

        if (category.length == 0 || category.length > 350) {

            $("#AJInvalidCategory").removeClass("d-none");
            $("#CreateJobCategory").removeClass("is-valid");
            $("#CreateJobCategory").addClass("is-invalid");
            $("#AJInvalidCategory").html("Please insert a category.");

            if (flag) id = "#CreateJobCategory";
            flag = false;

        } else {
            $("#AJInvalidCategory").addClass("d-none");
            $("#CreateJobCategory").removeClass("is-invalid");
            $("#CreateJobCategory").addClass("is-valid");
        }

        if (jobNature.length == 0 || jobNature.length > 350) {

            $("#AJInvalidJobNature").removeClass("d-none");
            $("#CreateJobNature").removeClass("is-valid");
            $("#CreateJobNature").addClass("is-invalid");
            $("#AJInvalidJobNature").html( "Invalid Job Nature.");

            if (flag) id = "#CreateJobNature";
            flag = false;

        } else {
            $("#AJInvalidJobNature").addClass("d-none");
            $("#CreateJobNature").removeClass("is-invalid");
            $("#CreateJobNature").addClass("is-valid");
        }

        if (salary.length > 10 || isNaN(salary)) {
            
            $("#AJInvalidSalary").html( "You don't have that amount of money");
            
            if(isNaN(salary) && salary.length!=0){
                $("#AJInvalidSalary").html(  "Please insert only numbers.");                
            }
            
            $("#AJInvalidSalary").removeClass("d-none");
            $("#CreateJobSalary").removeClass("is-valid");
            $("#CreateJobSalary").addClass("is-invalid");
            if (flag) id = "#CreateJobSalary";
            flag = false;

        } else {
            $("#AJInvalidSalary").addClass("d-none");
            $("#CreateJobSalary").removeClass("is-invalid");
            $("#CreateJobSalary").addClass("is-valid");
        }

        if (vacancy.length == 0 || vacancy.length > 10 || isNaN(vacancy)) {

            $("#AJInvalidVacancy").html( "Please insert the number of vacancy.");
            $("#AJInvalidVacancy").removeClass("d-none");
            $("#CreateJobVacancy").removeClass("is-valid");
            $("#CreateJobVacancy").addClass("is-invalid");


            if (flag) id = "#CreateJobVacancy";
            flag = false;

        } else {
            $("#AJInvalidVacancy").addClass("d-none");
            $("#CreateJobVacancy").removeClass("is-invalid");
            $("#CreateJobVacancy").addClass("is-valid");
        }

        if (flag) {
            let offers = JSON.parse(localStorage.getItem("offers"));
            console.log(offers)
            var id = 0;

            for (let i = 0; i < offers.length; i++) {
                if (offers[i].id > id) {
                    id = offers[i].id;
                }
            }

            var d = new Date();
            offers.push({"id":id+1, "email":localStorage.getItem("current_user"), "date": d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear(),"role": role, "city": city, "address": address, "category": category, "jobNature": jobNature, "salary": salary, "vacancy": vacancy, "description":description})

            localStorage.setItem("offers", JSON.stringify(offers));

            window.location.href = './jobs.html';
        } else {
            if ($(window).scrollTop() > $(id).offset().top - 60) {
                $('html,body').animate({

                    scrollTop: $(id).offset().top - 60
                }, 'slow');
            }

        }
    });
})(jQuery);


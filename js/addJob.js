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

        if (role.length == 0 || role.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobRole").removeClass("is-valid");
            $("#CreateJobRole").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobRole";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobRole").removeClass("is-invalid");
            $("#CreateJobRole").addClass("is-valid");
        }

        if (city.length == 0 || city.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobCity").removeClass("is-valid");
            $("#CreateJobCity").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobCity";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobCity").removeClass("is-invalid");
            $("#CreateJobCity").addClass("is-valid");
        }

        if (role.length == 0 || role.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobAddress").removeClass("is-valid");
            $("#CreateJobAddress").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobAddress";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobAddress").removeClass("is-invalid");
            $("#CreateJobAddress").addClass("is-valid");
        }

        if (category.length == 0 || category.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobCategory").removeClass("is-valid");
            $("#CreateJobCategory").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobCategory";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobCategory").removeClass("is-invalid");
            $("#CreateJobCategory").addClass("is-valid");
        }

        if (jobNature.length == 0 || jobNature.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobNature").removeClass("is-valid");
            $("#CreateJobNature").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobNature";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobNature").removeClass("is-invalid");
            $("#CreateJobNature").addClass("is-valid");
        }

        if (salary.length == 0 || salary.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobSalary").removeClass("is-valid");
            $("#CreateJobSalary").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobSalary";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobSalary").removeClass("is-invalid");
            $("#CreateJobSalary").addClass("is-valid");
        }

        if (vacancy.length == 0 || vacancy.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobVacancy").removeClass("is-valid");
            $("#CreateJobVacancy").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobVacancy";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobVacancy").removeClass("is-invalid");
            $("#CreateJobVacancy").addClass("is-valid");
        }

        if (description.length == 0 || description.length > 50) {

            //$("#RSInvalidEmail").removeClass("d-none");
            $("#CreateJobDescription").removeClass("is-valid");
            $("#CreateJobDescription").addClass("is-invalid");
            //$("#RSInvalidEmail").innerHtml = "Invalid Email ";

            if (flag) id = "#CreateJobDescription";
            flag = false;

        } else {
            //$("#RSInvalidEmail").addClass("d-none");
            $("#CreateJobDescription").removeClass("is-invalid");
            $("#CreateJobDescription").addClass("is-valid");
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


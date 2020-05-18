(function ($) {
  function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
      return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1900 || year > 2020 || month == 0 || month > 12)
      return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  };

  $("#SignInButton").click(function () {
    var email = $("#SeekerRegisterEmail").val() //type=email no html já faz verificações
    var password = $("#SeekerRegisterPassword").val()
    var name = $("#SeekerRegisterName").val()
    var type = $("#SeekerRegisterProfessionalCategory").val()
    var education = $("#SeekerRegisterEducation").val()
    var address = $("#SeekerRegisterAddress").val()
    var city = $("#SeekerRegisterCity").val()
    var phone = $("#SeekerRegisterPhoneNumber").val()
    var day = $("#SeekerRegisterDay").val()
    var month = $("#SeekerRegisterMonth").val()
    var year = $("#SeekerRegisterYear").val()
    let flag = true;
    var id = "html";

    if (email.length == 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      $("#RSInvalidEmail").removeClass("d-none");
      $("#SeekerRegisterEmail").removeClass("is-valid");
      $("#SeekerRegisterEmail").addClass("is-invalid");
      $("#RSInvalidEmail").innerHtml = "Invalid Email ";
      if (flag) id = "#SeekerRegisterEmail";
      flag = false;

    } else {
      $("#RSInvalidEmail").addClass("d-none");
      $("#SeekerRegisterEmail").removeClass("is-invalid");
      $("#SeekerRegisterEmail").addClass("is-valid");
    }

    if (password.length < 6 || password.length > 25) {
      $("#RSInvalidPassword").removeClass("d-none");
      $("#SeekerRegisterPassword").removeClass("is-valid");
      $("#SeekerRegisterPassword").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterPassword";
      flag = false;
    } else {
      $("#RSInvalidPassword").addClass("d-none");
      $("#SeekerRegisterPassword").removeClass("is-invalid");
      $("#SeekerRegisterPassword").addClass("is-valid");
    }

    if (name.length < 6 || name.length > 50) {
      $("#RSInvalidName").removeClass("d-none");
      $("#SeekerRegisterName").removeClass("is-valid");
      $("#SeekerRegisterName").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterName";
      flag = false;
    } else {
      $("#RSInvalidName").addClass("d-none");
      $("#SeekerRegisterName").removeClass("is-invalid");
      $("#SeekerRegisterName").addClass("is-valid");
    }

    if (type.length < 3 || type.length > 50) {
      $("#RSInvalidCategory").removeClass("d-none");
      $("#SeekerRegisterProfessionalCategory").removeClass("is-valid");
      $("#SeekerRegisterProfessionalCategory").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterProfessionalCategory";
      flag = false;
    } else {
      $("#RSInvalidCategory").addClass("d-none");
      $("#SeekerRegisterProfessionalCategory").removeClass("is-invalid");
      $("#SeekerRegisterProfessionalCategory").addClass("is-valid");
    }

    if (education.length < 3 || education.length > 50) {
      $("#RSInvalidEducation").removeClass("d-none");
      $("#SeekerRegisterEducation").removeClass("is-valid");
      $("#SeekerRegisterEducation").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterEducation";
      flag = false;
    } else {
      $("#RSInvalidEducation").addClass("d-none");
      $("#SeekerRegisterEducation").removeClass("is-invalid");
      $("#SeekerRegisterEducation").addClass("is-valid");
    }

    if (address.length < 5 || address.length > 50) {
      $("#RSInvalidAddress").removeClass("d-none");
      $("#SeekerRegisterAddress").removeClass("is-valid");
      $("#SeekerRegisterAddress").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterAddress";
      flag = false;
    } else {
      $("#RSInvalidAddress").addClass("d-none");
      $("#SeekerRegisterAddress").removeClass("is-invalid");
      $("#SeekerRegisterAddress").addClass("is-valid");
    }

    if (city.length < 2 || city.length > 50) {
      $("#RSInvalidCity").removeClass("d-none");
      $("#SeekerRegisterCity").removeClass("is-valid");
      $("#SeekerRegisterCity").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterAddress";
      flag = false;
    } else {
      $("#RSInvalidCity").addClass("d-none");
      $("#SeekerRegisterCity").removeClass("is-invalid");
      $("#SeekerRegisterCity").addClass("is-valid");
    }

    if (phone.length < 3 || phone.length > 15 || !isNaN(phone)) {
      $("#RSInvalidPhone").removeClass("d-none");
      $("#SeekerRegisterPhoneNumber").removeClass("is-valid");
      $("#SeekerRegisterPhoneNumber").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterPhoneNumber";
      flag = false;
    } else {
      $("#RSInvalidPhone").addClass("d-none");
      $("#SeekerRegisterPhoneNumber").removeClass("is-invalid");
      $("#SeekerRegisterPhoneNumber").addClass("is-valid");
    }

    if (day.length == 0 || month.length == 0 || year.length == 0 || !isValidDate("" + day + "/" + month + "/" + year)) {
      $("#RSInvalidBirth").removeClass("d-none");
      $("#SeekerRegisterYear").removeClass("is-valid");
      $("#SeekerRegisterYear").addClass("is-invalid");
      $("#SeekerRegisterMonth").removeClass("is-valid");
      $("#SeekerRegisterMonth").addClass("is-invalid");
      $("#SeekerRegisterDay").removeClass("is-valid");
      $("#SeekerRegisterDay").addClass("is-invalid");
      if (flag) id = "#SeekerRegisterDay";
      flag = false;
    } else {
      $("#RSInvalidBirth").addClass("d-none");
      $("#SeekerRegisterYear").removeClass("is-invalid");
      $("#SeekerRegisterYear").addClass("is-valid");
      $("#SeekerRegisterMonth").removeClass("is-invalid");
      $("#SeekerRegisterMonth").addClass("is-valid");
      $("#SeekerRegisterDay").removeClass("is-invalid");
      $("#SeekerRegisterDay").addClass("is-valid");
    }

    if (flag) {
      let seekers = JSON.parse(localStorage.getItem("seekers"));
      console.log(seekers)

      for (let i = 0; i < seekers.length; i++) {
        if (seekers[i].email.localeCompare(email) == 0) {
          $("#RSInvalidEmail").innerHTML = "Email already taken";
          $("#RSInvalidEmail").removeClass("d-none");
          $("#SeekerRegisterEmail").removeClass("is-valid");
          $("#SeekerRegisterEmail").addClass("is-invalid");
          return;
        }
      }

      var user = { "name": name, "dataNasc": day + "/" + month + "/" + year, "city": city, "address": address, "email": email, "password": password, "phoneNumber": phone, "description": "", "category": type }
      seekers.push(user)
      localStorage.setItem("current_user", user)

      localStorage.setItem("seekers", JSON.stringify(seekers));

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
$(document).ready(function () {
  $("#SignInButton").click(function () {
    var email = $("#RecruiterRegisterEmail").val() //type=email no html já faz verificações
    var password = $("#RecruiterRegisterPassword").val()
    var name = $("#RecruiterRegisterName").val()
    var address = $("#RecruiterRegisterAddress").val()
    var city = $("#RecruiterRegisterCity").val()
    var phone = $("#RecruiterRegisterPhoneNumber").val()
    let seekers = JSON.parse(localStorage.getItem("seekers"));
    let recruiters = JSON.parse(localStorage.getItem("recruiters"));
    let confirm = $("#RecruiterRegisterConfirm").val();
    let flag = true;
    var id = "html";

    if (email.length == 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      $("#RRInvalidEmail").removeClass("d-none");
      $("#RecruiterRegisterEmail").removeClass("is-valid");
      $("#RecruiterRegisterEmail").addClass("is-invalid");
      $("#RRInvalidEmail").innerHtml = "Invalid Email ";
      if (flag) id = "#RecruiterRegisterEmail";
      flag = false;

    } else {
      $("#RRInvalidEmail").addClass("d-none");
      $("#RecruiterRegisterEmail").removeClass("is-invalid");
      $("#RecruiterRegisterEmail").addClass("is-valid");

      for (let i = 0; i < seekers.length; i++) {
        if (seekers[i].email.localeCompare(email) == 0) {
          $("#RRInvalidEmail").html("Email already taken");
          $("#RRInvalidEmail").removeClass("d-none");
          $("#RecruiterRegisterEmail").removeClass("is-valid");
          $("#RecruiterRegisterEmail").addClass("is-invalid");
          if (flag) id = "#RecruiterRegisterEmail";
          flag=false;
        }
      }
      for(let i=0;recruiters.length;i++){
        if(recruiters[i].email.localeCompare(email)==0){
          $("#RRInvalidEmail").html("Email already taken");
          $("#RRInvalidEmail").removeClass("d-none");
          $("#RecruiterRegisterEmail").removeClass("is-valid");
          $("#RecruiterRegisterEmail").addClass("is-invalid");
          if (flag) id = "#RecruiterRegisterEmail";
          flag=false;
        }
      }

    }

    if (password.length < 6 || password.length > 25) {
      if(password.length<6){
        $("#RRInvalidPassword").html("Password is to short");
      }else{
        $("#RRInvalidPassword").html("Password is to long");
      }
      $("#RRInvalidPassword").removeClass("d-none");
      $("#RecruiterRegisterPassword").removeClass("is-valid");
      $("#RecruiterRegisterPassword").addClass("is-invalid");
      if (flag) id = "#RecruiterRegisterPassword";
      flag = false;
    } else {
      $("#RRInvalidPassword").addClass("d-none");
      $("#RecruiterRegisterPassword").removeClass("is-invalid");
      $("#RecruiterRegisterPassword").addClass("is-valid");
    }

    if(confirm.localeCompare(password)!=0 || password.length==0){

      $("#RRInvalidCPassword").html("Passwords do not match.");
      if(password.length==0){
      $("#RRInvalidCPassword").html("");

      }
      $("#RRInvalidCPassword").removeClass("d-none");
      $("#RecruiterRegisterConfirm").removeClass("is-valid");
      $("#RecruiterRegisterConfirm").addClass("is-invalid");
      if (flag) id = "#RecruiterRegisterPassword";
      flag = false;
    }else{
      $("#RRInvalidCPassword").addClass("d-none");
      $("#RecruiterRegisterConfirm").removeClass("is-invalid");
      $("#RecruiterRegisterConfirm").addClass("is-valid");
    }




    if (name.length==0 || name.length > 150) {
      if(name.length==0){
        $("#RRInvalidName").html("Please insert your Company name.");
      }else{
        $("#RRInvalidName").html("Your company name is too long.");
      }
      $("#RRInvalidName").removeClass("d-none");
      $("#RecruiterRegisterName").removeClass("is-valid");
      $("#RecruiterRegisterName").addClass("is-invalid");
      if (flag) id = "#RecruiterRegisterName";
      flag = false;
    } else {
      $("#RRInvalidName").addClass("d-none");
      $("#RecruiterRegisterName").removeClass("is-invalid");
      $("#RecruiterRegisterName").addClass("is-valid");
    }

    if (address.length < 5 || address.length > 150) {
      if (address.length < 5){
        $("#RRInvalidPassword").html("You address is too short.");
      }else{
        $("#RRInvalidPassword").html("Your address is too long.");  
      }
      $("#RRInvalidAddress").removeClass("d-none");
      $("#RecruiterRegisterAddress").removeClass("is-valid");
      $("#RecruiterRegisterAddress").addClass("is-invalid");
      if (flag) id = "#RecruiterRegisterAddress";
      flag = false;
    } else {
      $("#RRInvalidAddress").addClass("d-none");
      $("#RecruiterRegisterAddress").removeClass("is-invalid");
      $("#RecruiterRegisterAddress").addClass("is-valid");
    }

    if (city.length < 2 || city.length > 150) {
      $("#RRInvalidCity").removeClass("d-none");
      $("#RecruiterRegisterCity").removeClass("is-valid");
      $("#RecruiterRegisterCity").addClass("is-invalid");
      if (flag) id = "#RecruiterRegisterAddress";
      flag = false;
    } else {
      $("#RRInvalidCity").addClass("d-none");
      $("#RecruiterRegisterCity").removeClass("is-invalid");
      $("#RecruiterRegisterCity").addClass("is-valid");
    }

    if (phone.length < 3 || phone.length > 15 || isNaN(phone)) {
      $("#RRInvalidPassword").html("Please insert a valid Phone number");
      $("#RRInvalidPhone").removeClass("d-none");
      $("#RecruiterRegisterPhoneNumber").removeClass("is-valid");
      $("#RecruiterRegisterPhoneNumber").addClass("is-invalid");
      if (flag) id = "#RecruiterRegisterPhoneNumber";
      flag = false;
    } else {
      $("#RRInvalidPhone").addClass("d-none");
      $("#RecruiterRegisterPhoneNumber").removeClass("is-invalid");
      $("#RecruiterRegisterPhoneNumber").addClass("is-valid");
    }

    if (flag) {
      
      var user = { "name": name, "dataNasc": day + "/" + month + "/" + year, "city": city, "address": address, "email": email, "password": password, "phoneNumber": phone, "description": "", "category": type }
      recruiters.push(user)
      localStorage.setItem("current_user", user.email);

      localStorage.setItem("recruiters", JSON.stringify(recruiters));

      window.location.href = './jobs.html';
    } else {
      if ($(window).scrollTop() > $(id).offset().top - 60) {
        $('html,body').animate({
          scrollTop: $(id).offset().top - 60
        }, 'slow');
      }

    }
  });





});
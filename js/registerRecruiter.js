$(document).ready(function(){
    $("#SignInButton").click(function () { 
        var email = $("#RecruiterRegisterEmail").val() //type=email no html já faz verificações
        var password = $("#RecruiterRegisterPassword").val()
        var name = $("#RecruiterRegisterName").val()
        var address = $("#RecruiterRegisterAddress").val()
        var city = $("#RecruiterRegisterCity").val()
        var phone = $("#RecruiterRegisterPhoneNumber").val()
        let flag = true;
        var id = "html";

        if(email.length==0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
          $("#RRInvalidEmail").removeClass("d-none");
          $("#RecruiterRegisterEmail").removeClass("is-valid");
          $("#RecruiterRegisterEmail").addClass("is-invalid");
          $("#RRInvalidEmail").innerHtml = "Invalid Email ";
          if (flag) id = "#RecruiterRegisterEmail";
          flag = false;

        }else{
          $("#RRInvalidEmail").addClass("d-none");
          $("#RecruiterRegisterEmail").removeClass("is-invalid");
          $("#RecruiterRegisterEmail").addClass("is-valid");
        }

        if(password.length<6 || password.length>25){
          $("#RRInvalidPassword").removeClass("d-none");
          $("#RecruiterRegisterPassword").removeClass("is-valid");
          $("#RecruiterRegisterPassword").addClass("is-invalid");
          if (flag) id = "#RecruiterRegisterPassword";
          flag = false;
        }else{
          $("#RRInvalidPassword").addClass("d-none");
          $("#RecruiterRegisterPassword").removeClass("is-invalid");
          $("#RecruiterRegisterPassword").addClass("is-valid");
        }

        if(name.length<6  || name.length>50){
          $("#RRInvalidName").removeClass("d-none");
          $("#RecruiterRegisterName").removeClass("is-valid");
          $("#RecruiterRegisterName").addClass("is-invalid");
          if (flag) id = "#RecruiterRegisterName";
          flag = false;
        }else{
          $("#RRInvalidName").addClass("d-none");
          $("#RecruiterRegisterName").removeClass("is-invalid");
          $("#RecruiterRegisterName").addClass("is-valid");
        }

        if(address.length<5 || type.length>50){
          $("#RRInvalidAddress").removeClass("d-none");
          $("#RecruiterRegisterAddress").removeClass("is-valid");
          $("#RecruiterRegisterAddress").addClass("is-invalid");
          if (flag) id = "#RecruiterRegisterAddress";
          flag = false;
        }else{
          $("#RRInvalidAddress").addClass("d-none");
          $("#RecruiterRegisterAddress").removeClass("is-invalid");
          $("#RecruiterRegisterAddress").addClass("is-valid");
        }

        if(city.length<2 || city.length>50){
          $("#RRInvalidCity").removeClass("d-none");
          $("#RecruiterRegisterCity").removeClass("is-valid");
          $("#RecruiterRegisterCity").addClass("is-invalid");
          if (flag) id = "#RecruiterRegisterAddress";
          flag = false;
        }else{
          $("#RRInvalidCity").addClass("d-none");
          $("#RecruiterRegisterCity").removeClass("is-invalid");
          $("#RecruiterRegisterCity").addClass("is-valid");
        }

        if(phone.length<3 || phone.length>15){
          $("#RRInvalidPhone").removeClass("d-none");
          $("#RecruiterRegisterPhoneNumber").removeClass("is-valid");
          $("#RecruiterRegisterPhoneNumber").addClass("is-invalid");
          if (flag) id = "#RecruiterRegisterPhoneNumber";
          flag = false;
        }else{
          $("#RRInvalidPhone").addClass("d-none");
          $("#RecruiterRegisterPhoneNumber").removeClass("is-invalid");
          $("#RecruiterRegisterPhoneNumber").addClass("is-valid");
        }
        
        if (flag) {
          let RecruiterR = JSON.paRRe(localStorage.getItem("RecruiterR"));
          console.log(RecruiterR)

          for(let i=0;i<RecruiterR.length;i++){
            if (RecruiterR[i].email.localeCompare(email)==0){
              $("#RRInvalidEmail").innerHTML = "Email already taken";
              $("#RRInvalidEmail").removeClass("d-none");
              $("#RecruiterRegisterEmail").removeClass("is-valid");
              $("#RecruiterRegisterEmail").addClass("is-invalid");
              return;
            } 
          }
          
          RecruiterR.push({"name" : name, "dataNasc" : day+"/"+month+"/"+year, "city":city, "address": address, "email" : email, "password":password, "phoneNumber" : phone, "description" : "", "category" : type})
          
          localStorage.setItem("RecruiterR",JSON.stringify(RecruiterR));

          window.location.href = './jobs.html';
        } else {
          if ($(window).scrollTop() > $(id).offset().top-60){
            $('html,body').animate({
              
              scrollTop: $(id).offset().top-60
            }, 'slow');
          }
            
        }
    });





});
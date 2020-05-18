(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});





$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active

var slider = $('.slider_active');
if(slider.length) {
  slider.owlCarousel({
    loop:true,
    margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        767:{
            items:1,
            nav:false,
        },
        992:{
            items:1,
            nav:false
        },
        1200:{
            items:1,
            nav:false
        },
        1600:{
            items:1,
            nav:true
        }
    }
  });
}



// review-active
var testmonial = $('.testmonial_active');
if(testmonial.length){
  testmonial.owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false,
        },
        767:{
            items:1,
            dots:false,
            nav:false,
        },
        992:{
            items:1,
            nav:true
        },
        1200:{
            items:1,
            nav:true
        },
        1500:{
            items:1
        }
    }
  });
}

// review-active
var candidate = $('.candidate_active');
if(candidate.length){
  candidate.owlCarousel({
  loop:true,
  margin:30,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false,
        },
        767:{
            items:3,
            dots:false,
            nav:false,
        },
        992:{
            items:4,
            nav:true
        },
        1200:{
            items:4,
            nav:true
        },
        1500:{
            items:4
        }
    }
  });
}




// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

  // blog-page

  //brand-active
  var brand = $('.brad_active');
  if(brand.length){
    brand.owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    dots:false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
      responsive:{
          0:{
              items:2,
              nav:false
          },
          767:{
              items:4
          },
          992:{
              items:5
          }
      }
    });
  }


// blog-dtails-page

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  

function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1900 || year > 2020 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};

function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $(document).ready(function() {
          $('select').niceSelect();
        });


      //   $('#datepicker').datepicker({
      //     iconsLibrary: 'fontawesome',
      //     icons: {
      //      rightIcon: '<span class="fa fa-caret-down"></span>'
      //  }
      // });

        $("#SignInButton").click(function () { 
          var email = $("#SeekerRegisterEmail").val() //type=email no html já faz verificações
          var password = $("#SeekerRegisterPassword").val()
          var name = $("#SeekerRegisterName").val()
          var type = $("#SeekerRegisterProfessionalCategory").val()
          var address = $("#SeekerRegisterAddress").val()
          var city = $("#SeekerRegisterCity").val()
          var phone = $("#SeekerRegisterPhoneNumber").val()
          var day = $("#SeekerRegisterDay").val()
          var month = $("#SeekerRegisterMonth").val()
          var year = $("#SeekerRegisterYear").val()
          let flag = true;
          var id = "html";

          if(email.length==0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            $("#RSInvalidEmail").removeClass("d-none");
            $("#SeekerRegisterEmail").removeClass("is-valid");
            $("#SeekerRegisterEmail").addClass("is-invalid");
            $("#RSInvalidEmail").innerHtml = "Invalid Email ";
            if (flag) id = "#SeekerRegisterEmail";
            flag = false;

          }else{
            $("#RSInvalidEmail").addClass("d-none");
            $("#SeekerRegisterEmail").removeClass("is-invalid");
            $("#SeekerRegisterEmail").addClass("is-valid");
          }

          if(password.length<6  || password.length>25){
            $("#RSInvalidPassword").removeClass("d-none");
            $("#SeekerRegisterPassword").removeClass("is-valid");
            $("#SeekerRegisterPassword").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterPassword";
            flag = false;
          }else{
            $("#RSInvalidPassword").addClass("d-none");
            $("#SeekerRegisterPassword").removeClass("is-invalid");
            $("#SeekerRegisterPassword").addClass("is-valid");
          }

          if(name.length<6  || name.length>50){
            $("#RSInvalidName").removeClass("d-none");
            $("#SeekerRegisterName").removeClass("is-valid");
            $("#SeekerRegisterName").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterName";
            flag = false;
          }else{
            $("#RSInvalidName").addClass("d-none");
            $("#SeekerRegisterName").removeClass("is-invalid");
            $("#SeekerRegisterName").addClass("is-valid");
          }
          
          if(type.length<3 || type.length>30){
            $("#RSInvalidCategory").removeClass("d-none");
            $("#SeekerRegisterProfessionalCategory").removeClass("is-valid");
            $("#SeekerRegisterProfessionalCategory").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterProfessionalCategory";
            flag = false;
          }else{
            $("#RSInvalidCategory").addClass("d-none");
            $("#SeekerRegisterProfessionalCategory").removeClass("is-invalid");
            $("#SeekerRegisterProfessionalCategory").addClass("is-valid");
          }

          if(type.length<3 || type.length>30){
            $("#RSInvalidQualification").removeClass("d-none");
            $("#SeekerRegisterProfessionalQualification").removeClass("is-valid");
            $("#SeekerRegisterProfessionalQualification").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterProfessionalQualification";
            flag = false;
          }else{
            $("#RSInvalidQualification").addClass("d-none");
            $("#SeekerRegisterProfessionalQualification").removeClass("is-invalid");
            $("#SeekerRegisterProfessionalQualification").addClass("is-valid");
          }

          if(address.length<5 || type.length>50){
            $("#RSInvalidAddress").removeClass("d-none");
            $("#SeekerRegisterAddress").removeClass("is-valid");
            $("#SeekerRegisterAddress").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterAddress";
            flag = false;
          }else{
            $("#RSInvalidAddress").addClass("d-none");
            $("#SeekerRegisterAddress").removeClass("is-invalid");
            $("#SeekerRegisterAddress").addClass("is-valid");
          }

          if(city.length<2 || city.length>50){
            $("#RSInvalidCity").removeClass("d-none");
            $("#SeekerRegisterCity").removeClass("is-valid");
            $("#SeekerRegisterCity").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterAddress";
            flag = false;
          }else{
            $("#RSInvalidCity").addClass("d-none");
            $("#SeekerRegisterCity").removeClass("is-invalid");
            $("#SeekerRegisterCity").addClass("is-valid");
          }

          if(phone.length<3 || phone.length>15){
            $("#RSInvalidPhone").removeClass("d-none");
            $("#SeekerRegisterPhoneNumber").removeClass("is-valid");
            $("#SeekerRegisterPhoneNumber").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterPhoneNumber";
            flag = false;
          }else{
            $("#RSInvalidPhone").addClass("d-none");
            $("#SeekerRegisterPhoneNumber").removeClass("is-invalid");
            $("#SeekerRegisterPhoneNumber").addClass("is-valid");
          }

          if(day.length==0 || month.length==0 || year.length==0 || !isValidDate(""+day+"/"+month+"/"+year)){
            $("#RSInvalidBirth").removeClass("d-none");
            $("#SeekerRegisterYear").removeClass("is-valid");
            $("#SeekerRegisterYear").addClass("is-invalid");
            $("#SeekerRegisterMonth").removeClass("is-valid");
            $("#SeekerRegisterMonth").addClass("is-invalid");
            $("#SeekerRegisterDay").removeClass("is-valid");
            $("#SeekerRegisterDay").addClass("is-invalid");
            if (flag) id = "#SeekerRegisterDay";
            flag = false;
          }else{
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

            for(let i=0;i<seekers.length;i++){
              if (seekers[i].email.localeCompare(email)==0){
                $("#RSInvalidEmail").innerHTML = "Email already taken";
                $("#RSInvalidEmail").removeClass("d-none");
                $("#SeekerRegisterEmail").removeClass("is-valid");
                $("#SeekerRegisterEmail").addClass("is-invalid");
                return;
              } 
            }
            
            seekers.push({"name" : name, "dataNasc" : day+"/"+month+"/"+year, "city":city, "address": address, "email" : email, "password":password, "phoneNumber" : phone, "description" : "", "category" : type})
            
            localStorage.setItem("seekers",JSON.stringify(seekers));

            window.location.href = './jobs.html';
          } else {
            if ($(window).scrollTop() > $(id).offset().top-60){
              $('html,body').animate({
                
                scrollTop: $(id).offset().top-60
              }, 'slow');
            }
              
          }
        });
})(jQuery);
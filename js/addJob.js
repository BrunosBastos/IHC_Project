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








    $(document).ready(function () {

        // mobile_menu
        var menu = $('ul#navigation');
        if (menu.length) {
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: '+',
                openedSymbol: '-'
            });
        };
        // blog-menu
        // $('ul#blog-menu').slicknav({
        //   prependTo: ".blog_menu"
        // });

        // review-active

        var slider = $('.slider_active');
        if (slider.length) {
            slider.owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                nav: true,
                dots: false,
                autoplayHoverPause: true,
                autoplaySpeed: 800,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    767: {
                        items: 1,
                        nav: false,
                    },
                    992: {
                        items: 1,
                        nav: false
                    },
                    1200: {
                        items: 1,
                        nav: false
                    },
                    1600: {
                        items: 1,
                        nav: true
                    }
                }
            });
        }



        // review-active
        var testmonial = $('.testmonial_active');
        if (testmonial.length) {
            testmonial.owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                nav: true,
                dots: false,
                autoplayHoverPause: true,
                autoplaySpeed: 800,
                responsive: {
                    0: {
                        items: 1,
                        dots: false,
                        nav: false,
                    },
                    767: {
                        items: 1,
                        dots: false,
                        nav: false,
                    },
                    992: {
                        items: 1,
                        nav: true
                    },
                    1200: {
                        items: 1,
                        nav: true
                    },
                    1500: {
                        items: 1
                    }
                }
            });
        }

        // review-active
        var candidate = $('.candidate_active');
        if (candidate.length) {
            candidate.owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                nav: true,
                dots: false,
                autoplayHoverPause: true,
                autoplaySpeed: 800,
                responsive: {
                    0: {
                        items: 1,
                        dots: false,
                        nav: false,
                    },
                    767: {
                        items: 3,
                        dots: false,
                        nav: false,
                    },
                    992: {
                        items: 4,
                        nav: true
                    },
                    1200: {
                        items: 4,
                        nav: true
                    },
                    1500: {
                        items: 4
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

        //for menu active class
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
        if (brand.length) {
            brand.owlCarousel({
                loop: true,
                autoplay: true,
                nav: false,
                dots: false,
                autoplayHoverPause: true,
                autoplaySpeed: 800,
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    767: {
                        items: 4
                    },
                    992: {
                        items: 5
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
            loop: true,
            margin: 0,
            items: 1,
            // autoplay:true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            nav: true,
            dots: false,
            // autoplayHoverPause: true,
            // autoplaySpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    nav: false

                },
                767: {
                    items: 1,
                    nav: false
                },
                992: {
                    items: 1,
                    nav: false
                },
                1200: {
                    items: 1,
                }
            }
        });

    });

    // resitration_Form
    $(document).ready(function () {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });



    //------- Mailchimp js --------//  
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
    $(document).ready(function () {
        $('select').niceSelect();
    });


    //   $('#datepicker').datepicker({
    //     iconsLibrary: 'fontawesome',
    //     icons: {
    //      rightIcon: '<span class="fa fa-caret-down"></span>'
    //  }
    // });


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
                    id = seekers[i].id;
                }
            }

            offers.push({ "id":id+1, "name": name, "dataNasc": day + "/" + month + "/" + year, "city": city, "address": address, "email": email, "password": password, "phoneNumber": phone, "description": "", "category": type })

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


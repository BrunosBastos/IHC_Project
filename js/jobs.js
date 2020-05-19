$(document).ready(function(){
    var scroll2candidates;

    if ()

    $(".js-candidates").click(function(e){
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        window.location.href = "./job_details_recruiter.html&top=true"


        // Scroll
        $('html,body').animate({
            scrollTop: 300
        }, 'slow');
    });
});
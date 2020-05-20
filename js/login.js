let seekers;
let recruiters;

$(document).ready(function (){
    seekers = JSON.parse(localStorage.getItem("seekers"));
    recruiters = JSON.parse(localStorage.getItem("recruiters"));    

    $("#loginbutton").click(function (){
        console.log("click");
        let email = $("#loginEmail").val();
        let pass = $("#loginPassword").val();

        let flag = "false";
        let user;

        for(let i=0;i<seekers.length;i++){
            if(seekers[i].email.localeCompare(email)==0){
                flag = "seeker";
                user = seekers[i];
            }
        }
        
        for(let i=0;i<recruiters.length;i++){
            if(recruiters[i].email.localeCompare(email)==0){
                flag = "recruiter";
                user = recruiters[i];
            }
        }
        
        if(flag!="false"){
            if(user.password.localeCompare(pass)==0){
                localStorage.setItem("current_user", user.email)
                if(flag =="seeker"){
                    window.location.href = "./jobs.html";
                }else{
                    window.location.href = "./my_jobs.html";
                }
            }

        }else{
            $("#PInvalidLogin").removeClass("d-none");
            console.log("Not working");

        }

    })
});
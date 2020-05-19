let seekers;
let recruiters;
let current_user;
let applications;
let current_profile;
let current_job;
let user_type;
$(document).ready(function(){
    

    seekers = JSON.parse(localStorage.getItem("seekers"));
    recruiters = JSON.parse(localStorage.getItem("recruiters"));
    apllications = JSON.parse(localStorage.getItem("applications"));
    current_user = localStorage.getItem("current_user");
    current_profile = localStorage.getItem("current_profile");
    current_job = localStorage.getItem("current_offer");


    // sees if the user seeing the profile is a seeker
    for(let i=0;i<seekers.length;i++){
        if(current_user.localeCompare(seekers[i].email)==0){
            user_type = "seeker";
        }
    }

    // if it is not a seeker check if it is a recruiter
    if(user_type!="seeker"){
        for(let i=0;i<recruiters.length;i++){
            if(current_user.localeCompare(recruiters[i].email)==0){
                user_type ="recruiter";
            }
        }
    }else{
        //sees if the user is seeing is own profile
        if(current_user.localeCompare(current_profile)==0){
            //meter visivel o botao de edit do profile
        }
        else{
            // nem sei como é q ele pode ter chegado aqui
            console.log("wtf");
        }
    }
    if(user_type=="recruiter"){
        //meter visivel o botao de aceitar
        for(let i=0;i<applications.length;i++){
            if(applications[i].email.localeCompare(current_profile)==0 && applications[i].id.localeCompare(current_job)==0){
                // meter o botao de aceitar e rejeitar visiveis;
                break;
            }
        }
    }


    $("#acceptButton").click(function(){
        for(let i=0;i<applications.length;i++){
            if(applications[i].email.localeCompare(current_profile)==0 && applications[i].id.localeCompare(current_job)==0){
                applications[i].status="Accepted";
                localStorage.setItem("applications",JSON.stringify(applications));
                break;
            }
        }
    })

    $("#rejectButton").click(function(){
        for(let i=0;i<applications.length;i++){
            if(applications[i].email.localeCompare(current_profile)==0 && applications[i].id.localeCompare(current_job)==0){
                applications[i].status="Rejected";
                localStorage.setItem("applications",JSON.stringify(applications));
                break;
            }
        }
    })

    $("#editProfile").click(function(){

    });

    $("#saveChanges").click(function(){




    })


})
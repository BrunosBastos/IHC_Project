let seekers;
let recruiters;
let current_user;
let current_profile;
let current_job;
let user_type;
$(document).ready(function(){
    seekers = JSON.parse(localStorage.getItem("seekers"));
    recruiters = JSON.parse(localStorage.getItem("recruiters"));
    current_user = localStorage.getItem("current_user");
    current_profile = localStorage.getItem("current_profile");
    current_job = localStorage.getItem("current_job");

    for(let i=0;i<seekers.length;i++){
        if(current_user.localeCompare(seekers[i].email)==0){
            user_type = "seeker";
        }
    }

    if(user_type!="seeker"){
        for(let i=0;i<recruiters.length;i++){
            if(current_user.localeCompare(recruiters[i].email)==0){
                user_type ="recruiter";
            }
        }
    }else{
        if(current_user.localeCompare(current_profile)==0){
            //meter visivel o botao de edit do profile
        }
        else{
            // nem sei como é q ele pode ter chegado aqui
            console.log("wtf");
        }
    }
    let flag = false;
    if(user_type=="recruiter"){
        //meter visivel o botao de aceitar
        for(let i=0;i<seekers.length;i++){
            if(current_profile.localeCompare(seekers[i].email)!=0){
                continue;
            }
            for(let j=0;j<seekers[i].applys.length;j++){
                if(current_job.localeCompare(seekers[i].applies[j].id)){
                    flag= true;
                }
            }
        }
    }
    // sempre a dar-lhe tenho de ir comer okok
    //bom trabalho bro!!  
    //mas se tivessemos o dicionario era so fazer este for aqui em cima e mudar o status para AcceptedPending Rejected oof
    if(flag){
        //meter visivel o botao de accept e de reject
    }

    $("#acceptButton").click(function(){



    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});
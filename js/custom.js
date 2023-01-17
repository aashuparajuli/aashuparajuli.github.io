let currSection = "aboutMe"

function hideSections(){
    document.querySelectorAll(".section").forEach(section=>
        section.style.display = "none"
    );
}
function changeView (viewName){
    //Hide all of the views
    document.querySelector(`#${currSection}`).style.display = "none";
    // document.querySelectorAll(".section").forEach(section=>
    //     section.style.display = "none"
    // );
    //Display the view the user selected
    document.querySelector(`#${viewName}`).style.display = "block";
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("running js")
    //initially, aboutMe will be shown
    document.querySelector('#experiences').style.display = "block";

    document.querySelector('#aboutHeader').addEventListener('click',(e)=>{
        hideSections();
        document.querySelector('#aboutMe').style.display = "block";
    });
    document.querySelector("#navExperience").addEventListener('click',(e)=>{
        hideSections();
        //document.querySelector(`#${currSection}`).style.display = "none";
        document.querySelector("#experiences").style.display = "block";
    });
    document.querySelector("#projHeader").addEventListener('click',(e)=>{
        hideSections();
        //document.querySelector("#aboutMe").style.display = "none";
        document.querySelector("#projects").style.display = "block";
    });
    // document.querySelector('#resumeHeader').addEventListener('click',(e)=>{
    //     hideSections();
    //     document.querySelector("#resume").style.display = "block";
    // });
    document.querySelector('#contactHeader').addEventListener('click',(e)=>{
        console.log("clicked contacts");
        hideSections();
        document.querySelector("#contactInformation").style.display = "block";
    });
});
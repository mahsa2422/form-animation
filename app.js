function animationForm(){
    const arrows=document.querySelectorAll(".fa-arrow-left");

    arrows.forEach(arrow=>{
        arrow.addEventListener("click",()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nextForm=parent.nextElementSibling;
            ///////check for validation////

            if(input.type==="text" && validationUser(input)){
                nextInput(parent,nextForm);
            }else if(input.type==="email" && validationEmail(input)){
                nextInput(parent,nextForm);
            }
            else if(input.type==="password" && validationUser(input)){
                nextInput(parent,nextForm);
            }
            else{
                parent.style.animation="shake 0.5s ease";
            }
            //////
            parent.addEventListener("animationend",()=>{
                    parent.style.animation="";
            });

        });
    });
} 
function validationUser(user){
    if(user.value.length <6){
        console.log("Not enouph character");
        error("rgb(255, 51, 0)")
    }
    else{
        error("rgb(0, 204, 102)")
        return true;
    }

}
function validationEmail(email){
    const validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error("rgb(0, 204, 102)");
        return true;
    }
    else{
        error("rgb(255, 51, 0)")
    }
}
function nextInput(parent,nextForm){
    console.log('test');
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.remove("innactive");
  nextForm.classList.add("active");

}
function error(color){
    document.body.style.backgroundColor=color;
}
animationForm();
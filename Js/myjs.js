let email = document.getElementById('email');
let error_msg = document.getElementById('error-msg')
let errorimg= document.getElementById("errorimg");


function validate(){
    if(email.value.includes("@")){
        return true;
    } else {
     document.getElementById("errormsg").innerText="Please enter a valid email";
     errorimg.style.cssText = "opacity:1;";
     return false;
}
};



//        ()
let email = document.getElementById('email');
let evalue = email.value;
let errormsg = document.getElementById("errormsg");
let errorimg = document.getElementById("errorimg");
let tomatch = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function validate(){
    if(email.value.match(tomatch)){
        errormsg.innerText="";
        return true;
    }
    else if(email.value.length < 1){
        errormsg.innerText="Email is empty";
        return false;
    } 
    else{
        errormsg.innerHTML="Please enter a valid email";
        errorimg.style.cssText="opacity:1";
        return false;
}
};
var b=document.getElementById("sign");
function checkName(){
    var field=document.getElementById("name").value;
    var p=document.getElementById("nameval");
    p.innerHTML="";
    if(!isNaN(field)){
        b.disabled=true;
        p.innerHTML="Please Enter Only Characters";
        return;
    }
    if(field.length<5 || field.length>15){
        b.disabled=true;
        p.innerHTML="Your Character must be 5 to 15 Character";
        return;
    }
    p.innerHTML="";
    b.disabled=false;
}

function checkEmail(){
    var field=document.getElementById("mail").value;
    var p=document.getElementById("emailval");
    p.innerHTML="";
    var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
    var b=emailfilter.test(field);
    if(b==false){
        b.disabled=true;
        p.innerHTML="Invalid mail ID";
        return;
    }
   
    p.innerHTML="";
    b.disabled=false;
}

function checkPassword(){
    var field=document.getElementById("password").value;
    var p=document.getElementById("passval");
    p.innerHTML="";
    if(field.length<6 || field.length>10){
        b.disabled=true;
        p.innerHTML="Your Password must be 6 to 10 Character";
        return;
    }
    p.innerHTML="";
    b.disabled=false;
}

function checkNumber(){
    var field=document.getElementById("mobile").value;
    var p=document.getElementById("mobileval");
    p.innerHTML="";
    if(isNaN(field)){ b.disabled=true;
        p.innerHTML="Enter the valid Phone Number contains digits only";
        return;
            }
    if(field.length<10 || field.length>10){
        b.disabled=true;
        p.innerHTML="Your number must be of 10 digits";
        return;
    }
    
    p.innerHTML="";
    b.disabled=false;
}
function checkDate(){
    var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    var d=document.getElementById("date").value;
    var p=document.getElementById("dateval");
    p.innerHTML="";
   
    if(!(date_regex.test(d))){
        b.disabled=true;
        p.innerHTML="invalid Date";
        return;
    }
    p.innerHTML="";
    b.disabled=false;
}
document.getElementById("sign").addEventListener("click",()=>{
    var field1=document.getElementById("name").value;
    var field2=document.getElementById("mail").value;
    var field3=document.getElementById("mobile").value;
    var d=document.getElementById("date").value;
    if(field1==""|| field2==""||field3==""|| d=="")
    return;
    alert(`Name:- ${field1};  Email:- ${field2};  Mobile NO.:- ${field3}; DOB:- ${d}`)
})
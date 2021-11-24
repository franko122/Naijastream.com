var twoshi=document.getElementById("twoshi");
var jui=document.getElementById("jui");
var ree=document.getElementById("ree");
 
jui.addEventListener("click",day)
function day(){
    twoshi.style.border="none";
    ree.style.border="none";
    jui.style.border=" gray  solid 2px";
}
 
ree.addEventListener("click" ,mr)
function mr(){
    ree.style.border="gray  solid 2px";
    twoshi.style.border="none";
    jui.style.border="none";
}


twoshi.addEventListener("click" , hi)
function hi(){
    jui.style.border="none";
    ree.style.border="none";
      twoshi.style.border="gray  solid 2px";
} 
 
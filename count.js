var poke = document.getElementById('poke');
  var cmp = document.getElementById('counter');
  poke.addEventListener('click', myfonction) 
  function myfonction() {
    cmp.innerHTML = parseInt(cmp.innerHTML) +1; 
  } 
 
var addin =document.getElementById('addin');
var two=document.getElementById('placeadd');

addin.addEventListener('click', nowadd)
function nowadd(){
    two.innerHTML=parseInt(two.innerHTML) +1; 
} 


var fuel=document.getElementById('fuel');
var car=document.getElementById('station');

fuel.addEventListener('click' , moto)
function moto(){
    car.innerHTML=parseInt(car.innerHTML)+1;
}
  

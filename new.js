let btnGet=document.querySelector('#btn-get');
  let btnSet=document.querySelector('#btn-set');
  let inputGet=document.querySelector('#input-get');
  let inpuSet=document.querySelector('#input-set');
  let result=document.querySelector('#result');  
  btnGet.addEventListener('click', () =>{
     result.innerText = inputGet.value; 
  });
  
  
  
  btnSet.addEventListener('click', () =>{
      result.innerText = inpuSet.value; 
   });  


   function done(age,name,location) {
    console.log(age,+name,location)
}
done('frank',22,'oko');
function digits (a,b,c) {
    console.log(a*b*c)
}
digits(99,77,88)
var pass =  "frank";
let digit = "frank";

     if ("pass" > "digit"){
        console.log("analyzing welcome frank" .trimStart());
     }
     else (
  console.log("false".toLocaleUpperCase())
) 


 
 
 var clickshow=document.querySelector('#clickshow');
 var kin=document.getElementById('kin');
 var nok=document.getElementById('nok');

clickshow.addEventListener('click',()=>{
    clickshow.style.borderBottom="red solid 3px";
})

   kin.addEventListener('click' ,loker)
   function loker(){
      nok.style.display='none';
   }
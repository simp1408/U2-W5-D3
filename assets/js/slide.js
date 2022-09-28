let img=4;
let imgCorrente=1; 

function next(){

 imgCorrente++;
 if(imgCorrente>img){
    imgCorrente=1;
 }
//  imposto le img invisibili
for(let i=img; i>0; i--){
 document.querySelector(".img-slider img:nth-child("+i+")").style.display="none";   
}
document.querySelector(".img-slider img:nth-child("+imgCorrente+")").style.display="block";  
}

function back(){ 
    imgCorrente--;
    if(imgCorrente==0){
       imgCorrente=img;
    }
   
   for(let i=img; i>0; i--){
    document.querySelector(".img-slider img:nth-child("+i+")").style.display="none";   
   }
   document.querySelector(".img-slider img:nth-child("+imgCorrente+")").style.display="block";  
   }

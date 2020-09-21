let qte=document.getElementsByClassName("qte")
 
let btnplus=document.getElementsByClassName("btn+")
let btnmoin=document.getElementsByClassName("btn-")
let dislike=document.getElementsByClassName("dislike")
let card=document.getElementsByClassName("card")
let like=document.getElementsByClassName("like")
let totale=document.getElementById("totale")
let prix=document.getElementsByClassName("prix")
const newLocal = ["650", "300", "200"];
var priceElem = newLocal;




for (let i = 0; i < btnplus.length; i++) {
   btnplus[i].addEventListener("click", () => {
     btnplus[i].previousElementSibling.innerHTML++;
     
     prix[i].innerHTML = Number(prix[i].innerHTML) + Number(priceElem[i]);
     totale.innerHTML =Number(totale.innerText) +Number(priceElem[i]) 
   });
 }




for (let j = 0; j< btnmoin.length; j++) {
   btnmoin[j].addEventListener("click",function()
{

       qte[j].innerHTML--
       
   })
   
}
for (let dl = 0; dl< dislike.length; dl++) {
     dislike[dl].addEventListener("click",function()
{

      
      
        card[dl].parentNode.removeChild(card[dl]);
        totale.innerHTML =Number(totale.innerText) -Number(priceElem[i]) 
   })
   
}
for (let i = 0; i < like.length; i++) {
   like[i].addEventListener("click", () => {
     like[i].style.color === "black"
       ? (like[i].style.color = "red")
       : (like[i].style.color = "black");
   });
}





    
    
    
    
    
    
    
    
var btn_plus=document.getElementsByClassName('btn_plus')
// console.log(btn_plus);
var btn_minus=document.getElementsByClassName('btn_minus')

var trash=document.getElementsByClassName('trash');
var btnheart = document.getElementById('heart')
console.log(btnheart);
// trash a div 
for(const btntrash of trash)
    btntrash.addEventListener('click',function(){
btntrash.parentElement.parentElement.parentElement.remove();
let price = document.getElementsByClassName('prix')
//  console.log(price);
let totalpanier=document.getElementById('panier')
// console.log(totalpanier);
let conteur= document.getElementsByClassName('qte')
let sum=0

for (let i = 0; i < conteur.length; i++){
     sum= sum + Number(conteur[i].textContent) * Number(price[i].textContent)
 console.log(sum); 
}
totalpanier.textContent= sum
    })






//heart

for (const heart of btnheart) {
    heart.addEventListener('click', function() {
        heart.classList.toggle("toggleHeart");
    });
}
















// button plus events
for(const btn of btn_plus){
    btn.addEventListener('click',function(){
btn.nextElementSibling.textContent++;
 let price = document.getElementsByClassName('prix')
//  console.log(price);
let totalpanier=document.getElementById('panier')
// console.log(totalpanier);
let conteur= document.getElementsByClassName('qte')
let sum=0

for (let i = 0; i < conteur.length; i++){
     sum= sum + Number(conteur[i].textContent) * Number(price[i].textContent)
 console.log(sum); 
}
totalpanier.textContent= sum

})





   
        
    
}















// button minus events

for(const btn of btn_minus){
    btn.addEventListener('click',function (){
       if (btn.previousElementSibling.textContent>0){
        btn.previousElementSibling.textContent--
        let price = document.getElementsByClassName('prix')
//  console.log(price);
let totalpanier=document.getElementById('panier')
// console.log(totalpanier);
let conteur= document.getElementsByClassName('qte')
let sum=0

for (let i = 0; i < conteur.length; i++){
     sum= sum + Number(conteur[i].textContent) * Number(price[i].textContent)
 console.log(sum); 
}
totalpanier.textContent= sum
        
       }
       
       
        
    })
}






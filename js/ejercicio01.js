let numero = document.getElementById("numero");

numero.addEventListener("dblclick",function(){
    let trip=triple();
    numero.innerHTML=trip;
},false);

numero.addEventListener("mouseover",function(){
    numero.style.color = 'violet';
    numero.style.background ='black';
},false);

numero.addEventListener("mouseout",function(){
    numero.style.color = '';
    numero.style.background ='';
},false);

function triple(){
    return numero.innerHTML*3;
}
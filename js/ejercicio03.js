let caja = document.getElementById("info");

//Evento del teclado.
document.addEventListener("keydown",(event)=>{
    caja.style.background="#CCE6FF";
    let tecla =event.key;
    let asci =event.key.charCodeAt(0);
    caja.innerHTML="<h1>Teclado</h1><p>Carácter ["+tecla+"]</p><p>Código ["+asci+"]</br>";
},false);

//Evento del raton en movimiento.
document.addEventListener("mousemove",(event)=>{
    caja.style.background="white";
    let posNav =event.screenX+", "+event.screenY;
    let posPag =event.clientX+", "+event.clientY;
    caja.innerHTML="<h1>Raton</h1><p>Navegador ["+posNav+"]</p><p>Pagina ["+posPag+"]</br>";
},false);

//Evento click raton.
document.addEventListener("mousedown",(event)=>{
    caja.style.background="#FFFFCC";
    let posNav =event.screenX+", "+event.screenY;
    let posPag =event.clientX+", "+event.clientY;
    caja.innerHTML="<h1>Raton</h1><p>Navegador ["+posNav+"]</p><p>Pagina ["+posPag+"]</br>";
},false);
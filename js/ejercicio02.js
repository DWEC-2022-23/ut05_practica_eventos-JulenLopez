let enl1 = document.getElementById("enlace_1");
let enl2 = document.getElementById("enlace_2");
let enl3 = document.getElementById("enlace_3");

enl1.addEventListener("click",function(){
    muestraOculta(enl1);
});
enl2.addEventListener("click",function(){
    muestraOculta(enl2);
});
enl3.addEventListener("click",function(){
    muestraOculta(enl3);
});

function muestraOculta(boton) {
    let documento = "contenidos_"+boton.id.charAt(boton.id.length-1);
    documento= document.getElementById(documento)
    switch (boton.id){
        case "enlace_1":
            if (documento.style.display === "none") {
                documento.style.display = "block";
                enl1.innerText ="Ocultar contenido"
            } else {
                documento.style.display = "none";
                enl1.innerText ="Mostrar contenido"
            }
        break;
        case "enlace_2":
            if (documento.style.display === "none") {
                documento.style.display = "block";
                enl2.innerText ="Ocultar contenido"
            } else {
                documento.style.display = "none";
                enl2.innerText ="Mostrar contenido"
            }
        break;
        case "enlace_3":
            if (documento.style.display === "none") {
                documento.style.display = "block";
                enl3.innerText ="Ocultar contenido"
            } else {
                documento.style.display = "none";
                enl3.innerText ="Mostrar contenido"
            }
        break;
        default:
        break;
    }
}
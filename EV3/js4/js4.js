/* DIVISORES */

function divisores(numero){
    let total = 0;
    for (let i=1; i<=numero; i++){
        if(numero % i==0){
            total++;
        }
    }
    return total;
}

const divisoresV2 = function(numero){
    let total = 0;
    for (let i=1; i<=numero; i++){
        if(numero % i==0){
            total++;
        }
    }
    return total;
};
const divisoresV3 = function(numero){
    let total = 0;
    for (let i=1; i<=numero; i++){
        if(numero % i==0){
            total++;
        }
    }
    return total;
};

function calcular(){
let numero = parseInt(document.getElementById("num").value);


let resultado = document.getElementById("resul");
resultado.value = divisores(numero);


/*llamar la funcion*/
console.log("divisores",divisores(numero));
}

/* IMAGENES */

function imagen(){
    let imagen = document.getElementById("imagen").value;
    let mensaje6 = document.getElementById("mensaje6");

    parseInt(imagen);
    let lista = ["","1.jpg","2.webp","3.webp","4.webp","5.jpg"]
    text ="";

    if(imagen.length == 0 || imagen.length == 0){
        mensaje6.innerText = `Ingresa los datos <br>`;    
    }
    else{
        if(isNaN(imagen) || isNaN(imagen)) {
            mensaje6.innerHTML = `Solo numeros <br>`;
        }
        else{
            if (imagen >= 1 && imagen <= 5) {
                for (i = imagen; i<=imagen; i++){
                    text += `<img src="imagenes/${lista[i]}" alt="imagen" width="1000" height="600"></img>`;
                }
                mensaje6.innerHTML = text;     
            }
            else {
                mensaje6.innerHTML = "Solo numeros del 1 al 5";
            }
        }
    }
}


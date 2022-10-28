/* TABLAS DE MULTIPLICAR */
function tabla(){
    let tabla = document.getElementById("tabla").value;
    let mensaje5 = document.getElementById("mensaje5");

    text = "";

    if(tabla.length == 0 || tabla.length == 0){
        mensaje5.innerText = `Ingresa los datos`;    
    }
    else{
        if(isNaN(tabla) || isNaN(tabla)) {
            mensaje5.innerHTML = `Solo numeros <br>`;
        }
        else {
            for (i = 1; i<=10; i++){
                text += `<label>${tabla} X ${i} = ${tabla * i}</label> <br>`
                
            }
            mensaje5.innerHTML = text;
        }
    }
}
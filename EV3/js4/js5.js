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

/* CALCULADORA */

operaciones =["+","-","*","/"];

for(var i=0; i<operaciones.length; i++){
    var select = document.getElementById("operacion");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = operaciones[i];
    option.value = operaciones[i];
}

function calculadora() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operacion = document.getElementById("operacion").value;

    parseInt(numero1);
    parseInt(numero2);


    let mensaje4 = document.getElementById("mensaje4");


    if(numero1.length == 0 || numero2.length == 0){
        mensaje4.innerText = `Ingresa los datos <br>`;    
    }
    else{
        if(isNaN(numero1) || isNaN(numero2)) {
            mensaje4.innerHTML = `Solo numeros <br>`;
        }
        else {
            resultado = eval(numero1 + operacion + numero2);
            mensaje4.innerHTML = `Resultado: ${resultado}<br>`;
        }
        
    }


}
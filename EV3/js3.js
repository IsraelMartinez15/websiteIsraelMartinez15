/* HORARIOS DE MEDICAMENTO */
for(var i=0; i<=23; i++){
    var select = document.getElementById("inicio");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i;
    option.value = i;
}

for(var f=1; f<=12; f++){
    if (f % 6 == 0 || f == 1) {
        var select = document.getElementById("frecuencia");
        var option = document.createElement("OPTION");
        select.options.add(option);
        option.text = f;
        option.value = f;
    }
}

function medicamento(){
    let inicio = document.getElementById("inicio").value;
    let frecuencia = document.getElementById("frecuencia").value;


    let mensaje2 = document.getElementById("mensaje2");

    let toma = 1;

    let text = "";

    for(var j=parseInt([inicio]); j<=23; j+=parseInt([frecuencia])){
        text += `<label> Toma ${toma++} ${j}</label> <br>`;
    }
   
    mensaje2.innerHTML = text;
}

/* NUMEROS PERFECTOS */
function enteros(){
    let numeros = document.getElementById("numeros").value;
    let mensaje3 = document.getElementById("mensaje3");
    let mensajenum = document.getElementById("mensajenum");
    let mensajecont = document.getElementById("mensajecont");

    parseInt([numeros]);

    let suma;
    let text = "";
    let array = [];

    if(numeros.length == 0 || numeros.length == 0){
        mensaje3.innerText = `Ingresa los datos <br>`;    
    }
    else{
        if(isNaN(numeros) || isNaN(numeros)) {
            mensaje3.innerHTML = `Solo numeros <br>`;
        }
        else {
            for( i = 1; i <=numeros; i ++ ){
                suma =0;
                for (j = 1; j < i; j++){
                    if(i % j == 0){
                        suma +=j;
                    }
                }
                if (suma == i) { 
                    array.push(suma)
                }
            }
            for ( i = 0; i < array.length; i++){
                text += `<label> ${array[i]}</label> <br>`;
            }
            mensajenum.innerHTML = `Numeros encontrados del 1 al ${numeros} <br>`;
            mensajecont.innerHTML =`Numeros encontrados en la lista: ${array.length}<br>`;
            mensaje3.innerHTML = text;
        }
    } 
}
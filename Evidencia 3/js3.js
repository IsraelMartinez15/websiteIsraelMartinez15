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
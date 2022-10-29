let equipos = ["tigres","rayados","santos"];

console.log("Tipo de datos:", typeof equipos);

console.log("Datos:", equipos);

console.log("Total equipos:", equipos.length);

console.log("Primer Equipo:", equipos[0]);

console.log("Ultimo Equipo", equipos[-1]); /* Error */

console.log("Ultimo:", equipos[equipos.length-1]);

equipos.push("necaxa");

console.log(equipos);

console.log("ultimo", equipos.pop());

/* DEFINIR UN OBJETO */
let materias = ["Web1", "Conta", "Costos"];

let grupo52 = {
    "nombre" : "Grupo 52",
    "semestre" : 5,
    "carrera" : "LTI",
    "materias" : materias
};

console.log(grupo52);

console.log("nombre", grupo52[0]); /* Error */
console.log("nombre:", grupo52["nombre"]);
console.log("nombre:", grupo52.nombre);
console.log("Primer materia:", grupo52["materias"][0]);
grupo52.facultad = "FACPYA";
grupo52["facultad"] = "FACPYA";
console.log(grupo52);

/* let carrera = prompt("¿Cual es tu carrera: ") */

document.write('<marquee style="color: white;">Hola</marquee>');

document.write(`<ul>
                    <li>LTI</li>
                    <li>LA</li>
                    <li>CP</li>
                    <li>LNI</li>
                    <li>LGRSP</li>
                </ul>`)


let calif = 90;


/* IF  */
if( calif >= 90 ) {
    console.log("Excelente!")
}
else {
    console.log("No excelente :(");
}


if( calif => 95 && calif <= 100  ) {
    console.log("Championship");
}
else if( calif == 92 ) {
    console.log("Atalaya");
}
else if( calif == 0 ) {
    console.log("Burro, salte de LTI");
}
else {
    console.log("Ni pa la muela padrino");
}

/* SWITCH */
let numero = 2;

switch (numero) {

    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    default:
        break;
}

/* FOR */
for( let i=1; i<=100; i++) {
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo );
}

for( let i=10; i>=1 ; i-- ) {
    document.write(i + "<br>")
};



let horas = 43;
let pago_hora = 27;
let pago_total = 0;

if (horas >= 40) {
    let pago_total = ((pago_hora * 3) * (horas-40)) + (40 * pago_hora);
    console.log(pago_total);
}
else {
    let pago_total = horas * pago_hora;
    console.log(pago_total);
}
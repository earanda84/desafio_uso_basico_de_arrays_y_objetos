document.write('<header class="col"><p class="text-center h2 bg-secondary p-2 pb-3">Estadísticas Centro Médico Ñuñoa</p></header>');
//Se crean objetos tipo arreglos
//RADIOLOGIA
let radiologia = [{
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
    especialista: "IGNACIO SCHULZ",
    hora: "11:00",
}, {
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
    especialista: "FEDERICO SUBERCASEAUX",
    hora: "11:30",
}, {
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
    especialista: "FERNANDO WURTHZ",
    hora: "15:00",
}, {
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
    especialista: "ANA MARIA GODOY",
    hora: "15:30",
}, {
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
    especialista: "PATRICIA SUAZO",
    hora: "16:00",
}, ];

//TRAUMATOLOGIA
let traumatologia = [{
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
    especialista: "MARIA PAZ ALTUZARRA",
    hora: "8:00",
}, {
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
    especialista: "RAUL ARAYA",
    hora: "10:00",
}, {
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
    especialista: "MARIA ARRIAGADA",
    hora: "10:30",
}, {
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
    especialista: "ALEJANDRO BADILLA",
    hora: "11:00",
}, {
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
    especialista: "CECILIA BUDNIK",
    hora: "11:30",
}, {
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
    especialista: "ARTURO CAVAGNARO",
    hora: "12:00",
}, {
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
    especialista: "ANDRES KANACRI",
    hora: "12:30",
}, ];

//DENTAL
let dental = [{
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
    especialista: "ANDREA ZUÑIGA",
    hora: "8:30",
}, {
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
    especialista: "MARIA PIA ZAÑARTU",
    hora: "11:00",
}, {
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
    especialista: "SCARLETT WITTING",
    hora: "11:30",
}, {
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
    especialista: "FRANCISCO VON TEUBER",
    hora: "13:00",
}, {
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
    especialista: "EDUARDO VIÑUELA",
    hora: "13:30",
}, {
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
    especialista: "RAQUEL VILLASECA",
    hora: "14:00",
}, ];

/* 2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
nombre del paciente junto con la previsión, separados por un guión (utilizar índices
de arreglos para esto). 

Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre

*/
//Se declara constante, para contancater en un obeto todos los arreglos
const atenciones = radiologia.concat(traumatologia).concat(dental);

//se declara constante para imprimir la primera y última atenciones de cada constante (Radiología, Traumatología y Dental), para imprimir con interpolación en el html los datos solicitados en el ejercicio, agregando metodo .join(" - "), para el caso solicitado y se llama a la función.
const primeraUltimaAtencion = () => {
    document.write(`
        <table>
            <td>                
                <tr>
                <p class="text-center h3 ">Primera | Última Atención</p>
                Primera atención Radiología: ${[atenciones[0].paciente].concat(atenciones[0].prevision).join(' - ')}  | Última atención: ${[atenciones[4].paciente].concat(atenciones[4].prevision).join(' - ')}</tr>
                <hr>
                <tr>Primera atención Traumatología: ${[atenciones[5].paciente].concat(atenciones[5].prevision).join(' - ')} | Última atención: ${[atenciones[11].paciente].concat(atenciones[11].prevision).join(' - ')}</tr>
                <hr>
                <tr>Primera atención Dental: ${[atenciones[12].paciente].concat(atenciones[12].prevision).join(' - ')} | Última atención: ${[atenciones[17].paciente].concat(atenciones[17].prevision).join(' - ')}</tr>
                <hr>                
            </td>
        </table>    
    `);
};
primeraUltimaAtencion()

//Se declara constante para recorrer los objetos y mostrarlos en una tabla en Html, en principico se declara un let filas vacio, para que por cada iteración con  ciclo for of en los objetos declarados, se impriman en html, con código html interpolado, llamando a la función.
const recorrer_atenciones = () => {
    let filas = '';
    for (atencion of atenciones) {
        filas += `  
        <tr class ="text-center">
            <td>${atencion.paciente}</td>       
            <td>${atencion.rut}</td>
            <td>${atencion.prevision}</td>
            <td>${atencion.especialista}</td> 
            <td>${atencion.hora}</td>
        </tr>`;
    }
    const tabla = document.getElementById('tabla');
    tabla.innerHTML = `
        <table class="table border table-dark">
            <thead class="text-center">
                <tr class="bg-primary">
                    <th scope="col">Paciente</th>
                    <th scope="col">Rut</th>
                    <th scope="col">Previsión</th>
                    <th scope="col">Especialista</th>
                    <th scope="col">Hora</th>
                </tr>
            </thead>
            <tbody>${filas}</tbody>
        </table>
    `;

};
recorrer_atenciones();
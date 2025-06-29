import pool from './db.js'; 

//todos los nombres y apellidos de los pacientes + sus teléfonos
async function getTelefonos() {
    try {
        const [rows] = await pool.query('SELECT nombre, apellido, telefono FROM paciente');
        return rows;   
    } catch (error) {
        console.error("Ha ocurrido una excepción. Detalles:"+error.message);
    }
}

//obtener telefono de paciente según su numero de historia clínica
async function getTelefonoPaciente(numero_historial) {
    const query= ('SELECT telefono, nombre, apellido FROM paciente WHERE nro_historial_clinico = ?');
    try {
        const [rows] = await pool.query(query,[numero_historial]);
        return rows[0];
        
    } catch (error) {
        throw new Error("Ha ocurrido una excepción, No se pudo obtener el número telefónico. Detalles: "+error.message);
    }
}

// obtener medicos que atendieron a un paciente ingresado
async function getMedicosPaciente(numero_historial){
    const query = "SELECT m.matricula, m.nombre, m.apellido, m.especialidad FROM ingreso i " 
    +"JOIN paciente p ON i.nro_historial_paciente = p.nro_historial_clinico "+
    "JOIN medico m ON i.matricula_medico = m.matricula WHERE p.nro_historial_clinico = ?";
    try {
        const [rows] = await pool.execute(query,[numero_historial]);
        return rows;
    } catch (error) {
       console.error("No se pudo obtener al medico. Detalles: "+ error.message);
    }
}

//1)
console.log("----Todos los Pacientes y sus números de telefono----")
const telefonos = await getTelefonos();
telefonos.forEach(t => {
    console.log(`\nNombre: ${t.nombre} \nApellido: ${t.apellido} \nTelefono: ${t.telefono}\n`);
});
const numero_historial = 675;
//2)
const paciente = await getTelefonoPaciente(numero_historial);
console.log(`----El telefono del paciente ${paciente.nombre} ${paciente.apellido} es ${paciente.telefono}----\n`)
//3)
const medico = await getMedicosPaciente(numero_historial);
console.log(`----Medicos que atendieron al paciente: ${paciente.nombre}  ${paciente.apellido}----`);
medico.forEach(m => {
    console.log(`\nMatrícula: ${m.matricula} \nNombre: ${m.nombre} \nApellido: ${m.apellido} \nEspecialidad: ${m.especialidad}\n`);
});
    
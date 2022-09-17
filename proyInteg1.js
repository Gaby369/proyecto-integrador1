/*Crea una lista de contactos con datos predefinidos, 
cada contacto debe contener el nombre y apellido como 
una sola cadena de caracteres

Crea una función para añadir un nuevo contacto a una lista

Crea una función para borrar un contacto existente de la lista

Crea una función para imprimir en consola los contactos 
presentes en la lista

Publica tu código en Github, en tu repositorio contact-list 
crea un branch llamado project-1 y compártelo con nosotros. 👍🏼
*/
function anadirContacto(newName) {
    return listaDeContactos.push(newName);
}

function eliminarContacto(newName) {
    return listaDeContactos.pop(newName);
}

function imprimirContacto(listaDeContactos) {
    return console.log(listaDeContactos);
}
let listaDeContactos = ['AbadCallisaya', 'RaquelLimachi', 'AracelyPlata'];
anadirContacto("CesarMamani");
imprimirContacto(listaDeContactos);
eliminarContacto("AracelyPlata");
imprimirContacto(listaDeContactos);
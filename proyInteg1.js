/*Ajusta las funciones de c
rear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicacionesd
    ciudad
    dirección
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-2 y compártelo con nosotros. 👍🏼⬇️ */
function addContact(newContact) {
    listaDeContacts.push(newContact);
}

function deletContact(newContact) {
    listaDeContacts.pop(newContact);
}

function eraseContact(contact) {
    listaDeContacts = listaDeContacts.filter((obj) => obj !== contact);
}

function printContact(listaDeContacts) {
    console.log(listaDeContacts);
}

function updateContact(objold, idnew, namenew, telenew, ubicaCiu, UbicaDur) {
    objold.id = idnew;
    objold.nombre = namenew;
    objold.telefono = telenew;
    objold.ubicaciones.ciudad = ubicaCiu;
    objold.ubicaciones.direccion = UbicaDur;
}
let listaDeContacts = [];

let contact1 = { id: 1, nombre: "Gaby", telefono: 75229784, ubicaciones: { ciudad: "El Alto", direccion: "senkata" } };
let contact2 = { id: 2, nombre: "Abad", telefono: 78917048, ubicaciones: { ciudad: "El Alto", direccion: "rioseco" } };
//let contact3 = { id: 3, nombre: "Favio", telefono: 78917048, ubicaciones: { ciudad: "El Alto", direccion: "rioseco" } };

addContact(contact1);
addContact(contact2);
printContact(listaDeContacts);
/*
updateContact(contact2, 3, "anahi", 6578999, "santillana", "el alto");
printContact(listaDeContacts);*/
eraseContact(contact2);
printContact(listaDeContacts);
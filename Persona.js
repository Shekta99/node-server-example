const direccion = require("./Direccion");
const telefono = require("./Telefono");

/**
 * Clase destinada a la gestion de datos referente Persona
 */
class Persona {
  /**
   * Constructor de la clase
   */
  constructor(nombre, apellido, direccion, edad, telefono, correo) {
    this.db = [];
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.edad = edad;
    this.telefono = telefono;
    this.correo = correo;
  }

  /**
   * Funcion que obtiene nombre de Persona
   */
  getNombre() {
    return this.nombre;
  }

  /**
   * Funcion que obtiene apellido de Persona
   */
  getApellido() {
    return this.apellido;
  }

  /**
   * Funcion que obtiene direccion de Persona
   */
  getDireccion() {
    return this.direccion;
  }

  /**
   * Funcion que obtiene edad de Persona
   */
  getEdad() {
    return this.edad;
  }

  /**
   * Funcion que obtiene telefono de Persona
   */
  getTelefono() {
    return this.telefono;
  }

  /**
   * Funcion que obtiene correo de Persona
   */
  getCorreo() {
    return this.correo;
  }

  /**
   * Funcion que establece nombre de Persona
   */
  setNombre(precio) {
    this.nombre = nombre;
  }

  /**
   * Funcion que establece apellido de Persona
   */
  setApellido(precio) {
    this.apellido = apellido;
  }

  /**
   * Funcion que establece direccion de Persona
   */
  setDireccion(precio) {
    this.direccion = direccion;
  }

  /**
   * Funcion que establece edad de Persona
   */
  setEdad(precio) {
    this.edad = edad;
  }

  /**
   * Funcion que establece telefono de Persona
   */
  setTelefono(precio) {
    this.telefono = telefono;
  }

  /**
   * Funcion que establece correo de Persona
   */
  setCorreo(precio) {
    this.correo = correo;
  }

  /**
   * Funcion que inserta una nueva Persona en la base de datos
   */
  insertarPersona(persona) {
    let valores = `${persona.getNombre()}, ${persona.getApellido()}, ${persona.getDireccion()}, ${persona.getEdad()}, ${persona.getTelefono()}, ${persona.getCorreo()}`;
    let r = this.db.push(valores);
    if (r) {
      console.log("PERSONA_INSERTADA");
    } else {
      console.log("ERROR_PERSONA_INSERTADA");
    }
  }
}

const persona1 = new Persona(
  "hola",
  "mundo",
  direccion,
  13,
  telefono,
  "305222@"
);
persona1.insertarPersona(persona1);
console.log(persona1);

/**
 * Clase destinada a la gestion de datos referente Direccion
 */
class Direccion {
  /**
   * Constructor de la clase
   */
  constructor(calle, ciudad, pais) {
    this.db = [];
    this.calle = calle;
    this.ciudad = ciudad;
    this.pais = pais;
  }

  /**
   * Funcion que obtiene calle de Direccion
   */
  getCalle() {
    return this.calle;
  }

  /**
   * Funcion que obtiene ciudad de Direccion
   */
  getCiudad() {
    return this.ciudad;
  }

  /**
   * Funcion que obtiene pais de Direccion
   */
  getPais() {
    return this.pais;
  }

  /**
   * Funcion que establece calle de Direccion
   */
  setCalle(precio) {
    this.calle = calle;
  }

  /**
   * Funcion que establece ciudad de Direccion
   */
  setCiudad(precio) {
    this.ciudad = ciudad;
  }

  /**
   * Funcion que establece pais de Direccion
   */
  setPais(precio) {
    this.pais = pais;
  }

  /**
   * Funcion que inserta una nueva Direccion en la base de datos
   */
  insertarDireccion(direccion) {
    let valores = `${direccion.getCalle()}, ${direccion.getCiudad()}, ${direccion.getPais()}`;
    let r = this.db.push(valores);
    if (r) {
      console.log("DIRECCION_INSERTADA");
    } else {
      console.log("ERROR_DIRECCION_INSERTADA");
    }
  }
}

const direccion = new Direccion("calle 4", "bogota", "colombia");

direccion.insertarDireccion(direccion);

exports.direccion = new Direccion("calle 4", "bogota", "colombia");
console.log(direccion);

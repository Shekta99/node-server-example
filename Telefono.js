/**
 * Clase destinada a la gestion de datos referente Telefono
 */
class Telefono {
  /**
   * Constructor de la clase
   */
  constructor(indicador, numero) {
    this.db = [];
    this.indicador = indicador;
    this.numero = numero;
  }

  /**
   * Funcion que obtiene indicador de Telefono
   */
  getIndicador() {
    return this.indicador;
  }

  /**
   * Funcion que obtiene numero de Telefono
   */
  getNumero() {
    return this.numero;
  }

  /**
   * Funcion que establece indicador de Telefono
   */
  setIndicador(precio) {
    this.indicador = indicador;
  }

  /**
   * Funcion que establece numero de Telefono
   */
  setNumero(precio) {
    this.numero = numero;
  }

  /**
   * Funcion que inserta una nueva Telefono en la base de datos
   */
  insertarTelefono(telefono) {
    let valores = `${telefono.getIndicador()}, ${telefono.getNumero()}`;
    let r = this.db.push(valores);
    if (r) {
      console.log("TELEFONO_INSERTADA");
    } else {
      console.log("ERROR_TELEFONO_INSERTADA");
    }
  }
}
const telefono = new Telefono("+57", "305222");

telefono.insertarTelefono(telefono);
exports.telefono1 = new Telefono("+57", "305222");

console.log(telefono);

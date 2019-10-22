const target = {
  rojo: 'rojo',
  verde: 'verde',
  negro: 'negro',
};

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    // con Object.keys listamos los keys de nuestro objeto target que pasamos por parametro en Proxy y aqui lo recibimos como obj
    const suggestion = Object.keys(obj).find((key) => Levenshtein.get(key, prop) <= 3);
    if (suggestion) {
      console.log(`${prop} no se encontro. Quisiste decir ${suggestion} ?`);
    }
    return obj[prop];
  },

};

const p = new Proxy(target, handler);

// Proxy
// El proxy sirve para interceptar la lectura de propiedades de un objeto (los get, y set) entre muchas otras funciones.
// Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica que nosotros definamos.

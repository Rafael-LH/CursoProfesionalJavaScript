// cuando creamos un generador la ejecución estara detenida y tenemos que llamar a su metodo next() para
// poder continuar con la ejecución del programa

function* generator() {
  console.log('Generator Start');
  yield; // con yiel lo que estamos haciendo es parar la ejecución de nuetro generador, pero
  // aun podemos continuarlo otra vez con el metodo next()
  yield 1; // tambien con yiel podemos ceder un valor y retornarlo, lo que hasta este punto es correr generator Start
  // y parara la ejecución si queremos que continue llamamos nuevamente a su metodo next()  y ahora continuara en el segundo yiel
  // por lo tanto retornara 1 y ahi para su ejecición pero aun no termina el bloque de esta funcion, aun tenemos un console.log que imprime
  // Generator End y para que continueva la ejecución lo volvemos hacer con el metodo next() pero empezara en el siguiente console.log();
  console.log('Generator End');
}
const gen = generator();

gen.next(); // con next le decimos a mi generador que continue con su ejecución


// en la siguiente funcion haremos algo muy curioso

function* idMaker() {
  let id = 1;
  // lo que hacemos aquí es crear un bucle infinito algo que es muy peligroso ya que vamos a bloquear el hilo principal que tiene javascript
  // y generaremos lo que se conoce como el cuello de botella, pero como estamos haciendo una funcion generadora, paramos la ejecucion del programa
  // con yiel y cedemos un valor. De esta manera ya no se generara un bucle infinito porque la unica manera de continuar con el
  // funcionamiento del sistema es con el metodo next() y para parar la ejecución es con yield
  while (true) {
    yield id;
    id++;
  }
}


function* idMakerWithReset() {
  let id = 1;
  let reset;
  while (true) {
    reset = yield id;
    if (reset) {
      id = 1;
    } else {
      id++;
    }
  }
}
const idGeneratorReset = idMakerWithReset();
console.log(idGeneratorReset.next());

function* fibonacci() {
  let a = 1;
  let b = 1;

  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}
const numberFibonacci = fibonacci();
console.log(numberFibonacci);

// Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

// Algunas de sus características:

// Los generadores regresan una función.
// Empiezan suspendidos y se tiene que llamar next para que ejecuten.
// Regresan un value y un boolean done que define si ya terminaron.
// yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

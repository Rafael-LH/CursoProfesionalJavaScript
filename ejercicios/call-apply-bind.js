// la siguientes 3 funciones son funciones las cuales ya vienen empaquetadas o por defecto al crear una funcion
// y las 3 resiven como parametro el this, para poder definir el contexto
// call()
// bind()
// apply()


//******Establece this usando call y podemos pasar argumentos a la funcion******
console.log('CALL');
// si vamos a llamar call no es necesario que nuestra funcion resiva argumentos / valores
function saludar() {
  console.log(`Hola soy ${this.name} ${this.apellido}`);
}    

const person = {
  name: "Rafael",
  apellido: "Lopez"
}
saludar.call(person); //lo que hacemos aqui es establecer el valor de this que es persona en este caso, para 
// la funcion saludar

// con call tenemos que pasarle argumentos a la funcion y tambien el this
function caminar(metros, direccion) {
  console.log(`${this.name} va a caminar ${metros} en direccion ${direccion}`);
}
// le pasamos a nuestra funcion caminar el this / contexto seguido de dos argumentos / parametros pero esos dos argumentos
caminar.call(person, 100, "norte")


//******Establece this usando apply y podemos pasar argumentos a la funcion pero en un arreglo******
console.log('APPLY');
caminar.apply(person, [200, "sur"])
// solo para recordar la direfencia de apply y call
// Call -> Comas
// Apply -> Arreglos

//******Establece this en una nueva funcion usando bind******
const daniel = {name: "Daniel", apellido: "rodriguez"}
const danielSaluda = saludar.bind(daniel) //aqui nos crea una funcion para guardarla en una variable y poder llamarla
danielSaluda()

//tambien podemos pasarle argumentos a una funcion con bind
const danielCamina = caminar.bind(daniel, 2000, 'noreste') 
//aqui le podemos pasar los argumentos a una funcion con bind, primer parametro el this y segundo y tercero los argumentos
danielCamina();

// otra cosa que podemos hacer es establecerle parcialmente los valores a nuestra funcion caminar con bind
const danielCamina2 = caminar.bind(daniel, 7000) //le paso el primer argumento aqui
danielCamina2("poniente"); //le paso el segundo argumento aquí
                
const buttons = document.getElementsByClassName("button")

// No podemos recorrer nuestos buttons de esta manera porque es un Node List y los Node list solo se parecen a un arreglo
// mas no son arreglos que nosotros podemos iterar con forEach
// buttons.forEach(button => {
//   button.onclick = () => alert("Nunca pares de aprender!! :3 ♥️")
// });

// de esta manera es como podemos recorrer una lista de nodos, lo que estamos haciendo es llamar la propiedad Array con el prototype
// que forEach es una propiedad del prototype, y despues con call le pasamos el this seguido de los argumento que es la funcion que recorrera
// nuestra lista de nodos, en si lo que hacemos es cambiar el this/contexto de forEach para pasarle como argumento una funcion para recorrer
// nuestra lista de nodos
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert("Nunca pares de aprender!! :3 ♥️")
})
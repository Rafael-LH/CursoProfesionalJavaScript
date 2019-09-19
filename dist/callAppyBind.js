/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ejercicios/call-apply-bind.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ejercicios/call-apply-bind.js":
/*!***************************************!*\
  !*** ./ejercicios/call-apply-bind.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// la siguientes 3 funciones son funciones las cuales ya vienen empaquetadas o por defecto al crear una funcion\n// y las 3 resiven como parametro el this, para poder definir el contexto\n// call()\n// bind()\n// apply()\n//******Establece this usando call y podemos pasar argumentos a la funcion******\nconsole.log('CALL'); // si vamos a llamar call no es necesario que nuestra funcion resiva argumentos / valores\n\nfunction saludar() {\n  console.log(\"Hola soy \".concat(this.name, \" \").concat(this.apellido));\n}\n\nvar person = {\n  name: \"Rafael\",\n  apellido: \"Lopez\"\n};\nsaludar.call(person); //lo que hacemos aqui es establecer el valor de this que es persona en este caso, para \n// la funcion saludar\n// con call tenemos que pasarle argumentos a la funcion y tambien el this\n\nfunction caminar(metros, direccion) {\n  console.log(\"\".concat(this.name, \" va a caminar \").concat(metros, \" en direccion \").concat(direccion));\n} // le pasamos a nuestra funcion caminar el this / contexto seguido de dos argumentos / parametros pero esos dos argumentos\n\n\ncaminar.call(person, 100, \"norte\"); //******Establece this usando apply y podemos pasar argumentos a la funcion pero en un arreglo******\n\nconsole.log('APPLY');\ncaminar.apply(person, [200, \"sur\"]); // solo para recordar la direfencia de apply y call\n// Call -> Comas\n// Apply -> Arreglos\n//******Establece this en una nueva funcion usando bind******\n\nvar daniel = {\n  name: \"Daniel\",\n  apellido: \"rodriguez\"\n};\nvar danielSaluda = saludar.bind(daniel); //aqui nos crea una funcion para guardarla en una variable y poder llamarla\n\ndanielSaluda(); //tambien podemos pasarle argumentos a una funcion con bind\n\nvar danielCamina = caminar.bind(daniel, 2000, 'noreste'); //aqui le podemos pasar los argumentos a una funcion con bind, primer parametro el this y segundo y tercero los argumentos\n\ndanielCamina(); // otra cosa que podemos hacer es establecerle parcialmente los valores a nuestra funcion caminar con bind\n\nvar danielCamina2 = caminar.bind(daniel, 7000); //le paso el primer argumento aqui\n\ndanielCamina2(\"poniente\"); //le paso el segundo argumento aquí\n\nvar buttons = document.getElementsByClassName(\"button\"); // No podemos recorrer nuestos buttons de esta manera porque es un Node List y los Node list solo se parecen a un arreglo\n// mas no son arreglos que nosotros podemos iterar con forEach\n// buttons.forEach(button => {\n//   button.onclick = () => alert(\"Nunca pares de aprender!! :3 ♥️\")\n// });\n// de esta manera es como podemos recorrer una lista de nodos, lo que estamos haciendo es llamar la propiedad Array con el prototype\n// que forEach es una propiedad del prototype, y despues con call le pasamos el this seguido de los argumento que es la funcion que recorrera\n// nuestra lista de nodos, en si lo que hacemos es cambiar el this/contexto de forEach para pasarle como argumento una funcion para recorrer\n// nuestra lista de nodos\n\nArray.prototype.forEach.call(buttons, function (button) {\n  button.onclick = function () {\n    return alert(\"Nunca pares de aprender!! :3 ♥️\");\n  };\n});\n\n//# sourceURL=webpack:///./ejercicios/call-apply-bind.js?");

/***/ })

/******/ });
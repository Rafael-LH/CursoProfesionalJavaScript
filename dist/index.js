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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/MediaPlayer.js":
/*!*******************************!*\
  !*** ./assets/MediaPlayer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _this2 = undefined;\n\n// Documentacion de HTML media Element -> https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement\n// Paused https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement/paused\n// clase MediaPlayer\nfunction MediaPlayer(config) {\n  this.media = config.el;\n  this.plugins = config.plugins || [];\n\n  this._initPlugins();\n}\n\nMediaPlayer.prototype._initPlugins = function () {\n  var _this = this;\n\n  var player = {\n    play: function play() {\n      return _this.media.play();\n    },\n    pause: function pause() {\n      return _this.media.pause();\n    },\n    media: this.media,\n\n    // los getters los utilizamos escribiendo el keyword get seguido del nombre de la propiedad\n    get muted() {\n      return this.media.muted;\n    },\n\n    set muted(value) {\n      this.media.muted = value;\n    } // los getter and setter son propiedades virtuales en realidad no existen\n\n\n  };\n  this.plugins.forEach(function (plugin) {\n    plugin.run(player);\n  });\n}; // creacion del metodo play (Los metodos que se crean de un clase siempre se agregan a un prototype)\n\n\nMediaPlayer.prototype.play = function () {\n  // si este video esta pausado entonces ponlo en play, si no entonces ponlo en pausa\n  this.media.paused ? this.media.play() : this.media.pause();\n};\n\nMediaPlayer.prototype.stop = function () {\n  return _this2.media.pause();\n};\n\nMediaPlayer.prototype.mute = function () {\n  this.media.muted = true;\n};\n\nMediaPlayer.prototype.unmute = function () {\n  this.media.muted = false;\n};\n\nMediaPlayer.prototype.toggleMute = function (e) {\n  if (this.media.muted) {\n    this.media.muted = false;\n    e.target.innerHTML = 'Mute';\n  } else {\n    this.media.muted = true;\n    e.target.innerHTML = 'Unmute';\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaPlayer);\n\n//# sourceURL=webpack:///./assets/MediaPlayer.js?");

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MediaPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaPlayer */ \"./assets/MediaPlayer.js\");\n/* harmony import */ var _plugins_AutoPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/AutoPlay */ \"./assets/plugins/AutoPlay.js\");\n\n\nvar video = document.querySelector('video');\nvar btnPlayPause = document.querySelector('#btn-playPause');\nvar btntoggleMute = document.querySelector('#btn-toggleMute');\nvar player = new _MediaPlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: video,\n  plugins: [new _plugins_AutoPlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()]\n}); // play es un evento que ya biene con tag html de video\n\nbtnPlayPause.onclick = function () {\n  return player.play();\n};\n\nbtntoggleMute.onclick = function (e) {\n  return player.toggleMute(e);\n};\n\n//# sourceURL=webpack:///./assets/index.js?");

/***/ }),

/***/ "./assets/plugins/AutoPlay.js":
/*!************************************!*\
  !*** ./assets/plugins/AutoPlay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction AutoPlay() {}\n\nAutoPlay.prototype.run = function (player) {\n  if (!player.muted) {\n    // si no esta muted\n    player.muted = true; // entonces lo queremos hacer muted\n  }\n\n  player.play();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AutoPlay);\n\n//# sourceURL=webpack:///./assets/plugins/AutoPlay.js?");

/***/ })

/******/ });
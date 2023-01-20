/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Cell.js":
/*!************************!*\
  !*** ./src/js/Cell.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Cell {\r\n    constructor(pos, r, dir) {\r\n        this.position = pos;\r\n        this.radius = r;\r\n        this.direction = dir;\r\n    }\r\n    update() {\r\n        if (this.position.x < this.radius || this.position.x > 640 - this.radius) {\r\n            this.direction.x *= -1;\r\n        }\r\n        if (this.position.y < this.radius || this.position.y > 640 - this.radius) {\r\n            this.direction.y *= -1;\r\n        }\r\n        this.position.add(this.direction);\r\n    }\r\n    dist(x, y) {\r\n        const deltaX = Math.abs(this.position.x - x);\r\n        const deltaY = Math.abs(this.position.y - y);\r\n        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));\r\n    }\r\n    show(ctx) {\r\n        ctx.beginPath();\r\n        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\r\n        ctx.stroke();\r\n        ctx.closePath();\r\n    }\r\n}\r\nexports[\"default\"] = Cell;\r\n//# sourceMappingURL=Cell.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/Cell.js?");

/***/ }),

/***/ "./src/js/Vector2D.js":
/*!****************************!*\
  !*** ./src/js/Vector2D.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Vector2D {\r\n    constructor(x, y) {\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(other) {\r\n        this.x += other.x;\r\n        this.y += other.y;\r\n    }\r\n}\r\nexports[\"default\"] = Vector2D;\r\n//# sourceMappingURL=Vector2D.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/Vector2D.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Cell_1 = __importDefault(__webpack_require__(/*! ./Cell */ \"./src/js/Cell.js\"));\r\nconst Vector2D_1 = __importDefault(__webpack_require__(/*! ./Vector2D */ \"./src/js/Vector2D.js\"));\r\nconst canvas = document.querySelector(\"#canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst resolution = 4;\r\nconst cells = [];\r\nfor (let i = 0; i < 15; i++) {\r\n    const randomX = Math.random() * 640;\r\n    const randomY = Math.random() * 640;\r\n    const randomXDir = Math.random() * 10 - 5;\r\n    const randomYDir = Math.random() * 10 - 5;\r\n    const randomYRadius = Math.random() * 20 + 5;\r\n    cells.push(new Cell_1.default(new Vector2D_1.default(randomX, randomY), randomYRadius, new Vector2D_1.default(randomXDir, randomYDir)));\r\n}\r\nsetInterval(() => {\r\n    ctx.clearRect(0, 0, 640, 640);\r\n    pixels();\r\n    cells.forEach((c) => {\r\n        c.update();\r\n        //c.show(ctx);\r\n    });\r\n}, 50);\r\nconst pixels = () => {\r\n    for (let y = 0; y < 640; y += resolution) {\r\n        for (let x = 0; x < 640; x += resolution) {\r\n            let sum = 0;\r\n            cells.forEach((c) => {\r\n                const dist = c.dist(x, y);\r\n                sum += (500 * c.radius) / dist;\r\n            });\r\n            //ctx.fillStyle = `rgb(${sum}, ${sum}, ${sum})`;\r\n            ctx.fillStyle = `hsl(${sum}, 100%, 75%)`;\r\n            ctx.fillRect(x, y, resolution, resolution);\r\n        }\r\n    }\r\n};\r\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
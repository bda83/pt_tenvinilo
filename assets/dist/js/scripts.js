/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/scripts.js":
/*!**********************************!*\
  !*** ./assets/src/js/scripts.js ***!
  \**********************************/
/***/ (() => {

eval("const hamburgerIcon = document.querySelector(\".hamburger-icon\");\nconst body = document.querySelector(\"body\");\nconst navMenu = document.querySelector(\".menu-mobile\");\nconst itemsInGrid = document.getElementsByClassName(\"item-grid\");\nconst navSubmenu = document.querySelector(\".submenu-mobile\");\nconst backToMenu = document.querySelector(\".back-menu\");\n\n/*                                                  //\n//      MENU (mobile)                               //\n//      open/close with hamburger icon              //\n*/                                                  //\n\n// open mobile menu with hamburger icon\nhamburgerIcon.addEventListener(\"click\", () => {\n    /* Toggle class */\n    hamburgerIcon.classList.toggle(\"active\");\n    body.classList.toggle(\"blocked\");\n    navMenu.classList.toggle(\"opened\");\n    navSubmenu.classList.remove(\"opened-submenu\");\n    /* Toggle aria-expanded value */\n    let menuOpen = navMenu.classList.contains(\"opened\");\n    let newMenuOpenStatus = menuOpen;\n    hamburgerIcon.setAttribute(\"aria-expanded\", newMenuOpenStatus);\n})\n\n\n/*                                                  //\n//      SUBMENU (mobile)                            //\n//      open/close with options in menu             //\n*/                                                  //\n\n// open mobile submenu\nfor (var i=0; i< itemsInGrid.length; i++) {\n    itemsInGrid[i].addEventListener(\"click\",function() {\n        /* Toggle active class */\n        navMenu.classList.toggle(\"opened-submenu\");\n        navSubmenu.classList.toggle(\"opened-submenu\");\n    });\n}\n\n\n// close mobile submenu and go to mobile menu\nbackToMenu.addEventListener(\"click\", () => {\n    navMenu.classList.remove(\"opened-submenu\");\n    navSubmenu.classList.remove(\"opened-submenu\");\n})\n\n\n/*                                                  //\n//      MENU & SUBMENU (mobile)                     //\n//      Close when any option is selected           //\n*/                                                  //\n\ndocument.querySelectorAll(\".menu-item\").forEach(n => n.addEventListener(\"click\", () => {\n    hamburgerIcon.classList.remove(\"active\");\n    body.classList.remove(\"blocked\");\n    navMenu.classList.remove(\"opened\");\n    navSubmenu.classList.remove(\"opened-submenu\");\n}))\n\n\n/*                                                  //\n//      GENERATE RANDOM GRADIENT (extras)           //\n//      Delete                                      //\n*/                                                  //\n\nfunction generate() {\n    for ( var j = 0; j < 5; j++ ) {\n\n        var hexValues = [\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"a\",\"b\",\"c\",\"d\",\"e\"];\n        \n        function populate(a) {\n        for ( var i = 0; i < 6; i++ ) {\n            var x = Math.round( Math.random() * 14 );\n            var y = hexValues[x];\n            a += y;\n        }\n        return a;\n        }\n        \n        var newColor1 = populate('#');\n        var newColor2 = populate('#');\n        var angle = Math.round( Math.random() * 360 );\n        \n        var gradient = \"linear-gradient(\" + angle + \"deg, \" + newColor1 + \", \" + newColor2 + \")\";\n\n        var boxes= document.getElementsByClassName(\"content\");\n        \n        boxes[j].style.background = gradient;  \n  }}\n  \n  document.onload = generate();\n\n//# sourceURL=webpack://brunoDiazArias/./assets/src/js/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/js/scripts.js"]();
/******/ 	
/******/ })()
;
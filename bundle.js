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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyApFpKy77c-0bBNbKAQNTiC0Fn5Rs9QbQQ\",\n    authDomain: \"online-recipe-8d264.firebaseapp.com\",\n    projectId: \"online-recipe-8d264\",\n    storageBucket: \"online-recipe-8d264.appspot.com\",\n    messagingSenderId: \"167679680151\",\n    appId: \"1:167679680151:web:0e35233e4dc845c64753d2\",\n    measurementId: \"G-2LP809RPV7\"\n  };\n\n// Initialize Firebase\nconst app = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app); // Get Firestore instance\n\nconst recipeCollection = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, 'recipes'); // Reference to 'recipes' collection\n\n// Function to render recipes on the webpage\nfunction renderRecipes(snapshot) {\n  const recipeContainer = document.querySelector('.recipe-list');\n  recipeContainer.innerHTML = ''; // Clear previous content\n\n  snapshot.forEach(doc => {\n    const recipeData = doc.data();\n\n    // Create elements to display recipe details\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    const title = document.createElement('h3');\n    title.innerText = `Name: ${recipeData.Name}`;\n    card.appendChild(title);\n\n    const ingredient = document.createElement('p');\n    ingredient.innerText = `Ingredient: ${recipeData.Ingredient}`;\n    card.appendChild(ingredient);\n\n    const method = document.createElement('p');\n    method.innerText = `Method: ${recipeData.Method}`;\n    card.appendChild(method);\n\n    recipeContainer.appendChild(card); // Append the card to the container\n  });\n}\n\n// Snapshot listener to fetch and display recipes\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(recipeCollection, snapshot => {\n  renderRecipes(snapshot.docs);\n});\n\n// Form for adding a recipe\nconst addRecipeForm = document.querySelector('.add');\naddRecipeForm.addEventListener('submit', async (e) => {\n  e.preventDefault();\n\n  const formData = new FormData(addRecipeForm);\n  const name = formData.get('Name');\n  const ingredient = formData.get('Ingredient');\n  const method = formData.get('Method');\n\n  try {\n    await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(recipeCollection, { Name: name, Ingredient: ingredient, Method: method });\n    addRecipeForm.reset();\n  } catch (error) {\n    console.error('Error adding recipe: ', error);\n  }\n});\n\n// Form for deleting a recipe\nconst deleteRecipeForm = document.querySelector('.delete');\ndeleteRecipeForm.addEventListener('submit', async (e) => {\n  e.preventDefault();\n\n  const formData = new FormData(deleteRecipeForm);\n  const recipeId = formData.get('recipeId');\n\n  try {\n    await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, 'recipes', recipeId));\n    deleteRecipeForm.reset();\n  } catch (error) {\n    console.error('Error deleting recipe: ', error);\n  }\n});\n\n// Google Sign-In functionality\nconst provider = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nconst signInButton = document.querySelector('.signin');\nsignInButton.addEventListener('click', async () => {\n  const auth = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n  try {\n    const result = await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, provider);\n    const user = result.user;\n    console.log(user);\n    window.location.href = 'done.html';\n  } catch (error) {\n    console.error('Google Sign-In Error: ', error);\n    // Handle sign-in error\n  }\n});\n\n\n//# sourceURL=webpack://chatbot/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
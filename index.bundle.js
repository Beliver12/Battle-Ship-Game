/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleship: () => (/* binding */ battleship),
/* harmony export */   board: () => (/* binding */ board),
/* harmony export */   board2: () => (/* binding */ board2),
/* harmony export */   carrier: () => (/* binding */ carrier),
/* harmony export */   cruiser: () => (/* binding */ cruiser),
/* harmony export */   destroyer: () => (/* binding */ destroyer),
/* harmony export */   submarine: () => (/* binding */ submarine)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");


function Gameboard() {
  const createBoard = (arr = []) => {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = false;
      }
    }
    return arr;
  };
  const board = createBoard();
  const placeShip = (ship, pointA, pointB) => {
    let start = pointA;
    let end = pointB;

    if (board.some((row) => row.includes(ship))) {
      console.log('Allready have that ship');
      return false;
    }

    if (pointB[0] < pointA[0] || pointB[1] < pointA[1]) {
      start = pointB;
      end = pointA;
    }

    if (end[1] > start[1]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0]][start[1] + i] = ship;
      }
    } else if (end[0] > start[0]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0] + i][start[1]] = ship;
      }
    }
    return true;
  };
  const recieveAttack = (x, y) => {
    let missed = 0;
    if (board[x][y] !== false && board[x][y] !== 'hit') {
      const temp = board[x][y];
      temp.hit(temp);
      board[x][y] = 'hit';
    } else if (board[x][y] === false && board[x][y] !== 'miss' && board[x][y] !== 'hit') {
      board[x][y] = 'miss';
      missed++;
      return 'miss';
    } else {
      return 'that position is allready hit';
    }
  };

  const status = (board) => {
    let hits = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === 'hit') {
          hits++;
        }
      }
    }
    if (hits === 17) {
      return 'all ships have been sunk';
    }
    return 'keep playing';
  };
  return {
    get board() {
      return board;
    },
    createBoard,
    placeShip,
    recieveAttack,
    status,
  };
}
const board = Gameboard();
const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Carrier', 5);
const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Battleship', 4);
const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Cruiser', 3);
const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Submarine', 3);
const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('Destroyer', 2);
const board2 = Gameboard();

board2.status(board2.board);
board.placeShip(carrier, [5, 5], [5, 9]);
board2.placeShip(carrier, [4, 0], [0, 0]);
board2.placeShip(battleship, [7, 5], [7, 9]);
board2.placeShip(cruiser, [5, 5], [5, 7]);
board2.placeShip(submarine, [2, 2], [2, 4]);
board2.placeShip(destroyer, [8, 5], [8, 6]);
board2.recieveAttack(4, 0);
board2.recieveAttack(3, 0);
board2.recieveAttack(2, 0);
board2.recieveAttack(1, 0);
board2.recieveAttack(0, 0);
board2.recieveAttack(7, 5);
board2.recieveAttack(7, 6);
board2.recieveAttack(7, 7);
board2.recieveAttack(7, 8);
board2.recieveAttack(7, 9);

board2.recieveAttack(5, 5);
board2.recieveAttack(5, 6);
board2.recieveAttack(5, 7);
board2.recieveAttack(2, 2);
board2.recieveAttack(2, 3);
board2.recieveAttack(2, 4);
board2.recieveAttack(8, 5);
board2.recieveAttack(8, 6);
console.log(board2.board.missed);
console.log(_player__WEBPACK_IMPORTED_MODULE_1__.player)



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
const player = 'player';




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


 function Ship(name = null, length = null, hitTimes = 0, isSunk = false) {
  const hit = (obj) => { obj.hitTimes += 1 };

  const isSunkFn = (obj, shipLength, hits) => {
    if (shipLength === hits) {
      obj.isSunk = true;
      return 'Ship is sunk';
    } 
    return 'Ship is alive';
  };

  return {
    name, length, hitTimes, isSunk, hit, isSunkFn,
  };
}
//const myShip1 = Ship('Carrier', 5);
//console.log(myShip1);
//printMe();


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ship.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBSTtBQUNwQixtQkFBbUIsaURBQUk7QUFDdkIsZ0JBQWdCLGlEQUFJO0FBQ3BCLGtCQUFrQixpREFBSTtBQUN0QixrQkFBa0IsaURBQUk7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJDQUFNO0FBR2hCOzs7Ozs7Ozs7Ozs7Ozs7QUNySEY7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRmlCOztBQUVuQyxDQUFnQjtBQUNoQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBjcmVhdGVCb2FyZCA9IChhcnIgPSBbXSkgPT4ge1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcbiAgICBjb25zdCBjb2x1bW5zID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGFycltpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgYXJyW2ldW2pdID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBvaW50QSwgcG9pbnRCKSA9PiB7XG4gICAgbGV0IHN0YXJ0ID0gcG9pbnRBO1xuICAgIGxldCBlbmQgPSBwb2ludEI7XG5cbiAgICBpZiAoYm9hcmQuc29tZSgocm93KSA9PiByb3cuaW5jbHVkZXMoc2hpcCkpKSB7XG4gICAgICBjb25zb2xlLmxvZygnQWxscmVhZHkgaGF2ZSB0aGF0IHNoaXAnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocG9pbnRCWzBdIDwgcG9pbnRBWzBdIHx8IHBvaW50QlsxXSA8IHBvaW50QVsxXSkge1xuICAgICAgc3RhcnQgPSBwb2ludEI7XG4gICAgICBlbmQgPSBwb2ludEE7XG4gICAgfVxuXG4gICAgaWYgKGVuZFsxXSA+IHN0YXJ0WzFdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc3RhcnRbMF1dW3N0YXJ0WzFdICsgaV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZW5kWzBdID4gc3RhcnRbMF0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFtzdGFydFswXSArIGldW3N0YXJ0WzFdXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBsZXQgbWlzc2VkID0gMDtcbiAgICBpZiAoYm9hcmRbeF1beV0gIT09IGZhbHNlICYmIGJvYXJkW3hdW3ldICE9PSAnaGl0Jykge1xuICAgICAgY29uc3QgdGVtcCA9IGJvYXJkW3hdW3ldO1xuICAgICAgdGVtcC5oaXQodGVtcCk7XG4gICAgICBib2FyZFt4XVt5XSA9ICdoaXQnO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRbeF1beV0gPT09IGZhbHNlICYmIGJvYXJkW3hdW3ldICE9PSAnbWlzcycgJiYgYm9hcmRbeF1beV0gIT09ICdoaXQnKSB7XG4gICAgICBib2FyZFt4XVt5XSA9ICdtaXNzJztcbiAgICAgIG1pc3NlZCsrO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd0aGF0IHBvc2l0aW9uIGlzIGFsbHJlYWR5IGhpdCc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXR1cyA9IChib2FyZCkgPT4ge1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgaGl0cysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoaXRzID09PSAxNykge1xuICAgICAgcmV0dXJuICdhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsnO1xuICAgIH1cbiAgICByZXR1cm4gJ2tlZXAgcGxheWluZyc7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgc3RhdHVzLFxuICB9O1xufVxuY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbmNvbnN0IGNhcnJpZXIgPSBTaGlwKCdDYXJyaWVyJywgNSk7XG5jb25zdCBiYXR0bGVzaGlwID0gU2hpcCgnQmF0dGxlc2hpcCcsIDQpO1xuY29uc3QgY3J1aXNlciA9IFNoaXAoJ0NydWlzZXInLCAzKTtcbmNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ1N1Ym1hcmluZScsIDMpO1xuY29uc3QgZGVzdHJveWVyID0gU2hpcCgnRGVzdHJveWVyJywgMik7XG5jb25zdCBib2FyZDIgPSBHYW1lYm9hcmQoKTtcblxuYm9hcmQyLnN0YXR1cyhib2FyZDIuYm9hcmQpO1xuYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIFs1LCA1XSwgWzUsIDldKTtcbmJvYXJkMi5wbGFjZVNoaXAoY2FycmllciwgWzQsIDBdLCBbMCwgMF0pO1xuYm9hcmQyLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBbNywgNV0sIFs3LCA5XSk7XG5ib2FyZDIucGxhY2VTaGlwKGNydWlzZXIsIFs1LCA1XSwgWzUsIDddKTtcbmJvYXJkMi5wbGFjZVNoaXAoc3VibWFyaW5lLCBbMiwgMl0sIFsyLCA0XSk7XG5ib2FyZDIucGxhY2VTaGlwKGRlc3Ryb3llciwgWzgsIDVdLCBbOCwgNl0pO1xuYm9hcmQyLnJlY2lldmVBdHRhY2soNCwgMCk7XG5ib2FyZDIucmVjaWV2ZUF0dGFjaygzLCAwKTtcbmJvYXJkMi5yZWNpZXZlQXR0YWNrKDIsIDApO1xuYm9hcmQyLnJlY2lldmVBdHRhY2soMSwgMCk7XG5ib2FyZDIucmVjaWV2ZUF0dGFjaygwLCAwKTtcbmJvYXJkMi5yZWNpZXZlQXR0YWNrKDcsIDUpO1xuYm9hcmQyLnJlY2lldmVBdHRhY2soNywgNik7XG5ib2FyZDIucmVjaWV2ZUF0dGFjayg3LCA3KTtcbmJvYXJkMi5yZWNpZXZlQXR0YWNrKDcsIDgpO1xuYm9hcmQyLnJlY2lldmVBdHRhY2soNywgOSk7XG5cbmJvYXJkMi5yZWNpZXZlQXR0YWNrKDUsIDUpO1xuYm9hcmQyLnJlY2lldmVBdHRhY2soNSwgNik7XG5ib2FyZDIucmVjaWV2ZUF0dGFjayg1LCA3KTtcbmJvYXJkMi5yZWNpZXZlQXR0YWNrKDIsIDIpO1xuYm9hcmQyLnJlY2lldmVBdHRhY2soMiwgMyk7XG5ib2FyZDIucmVjaWV2ZUF0dGFjaygyLCA0KTtcbmJvYXJkMi5yZWNpZXZlQXR0YWNrKDgsIDUpO1xuYm9hcmQyLnJlY2lldmVBdHRhY2soOCwgNik7XG5jb25zb2xlLmxvZyhib2FyZDIuYm9hcmQubWlzc2VkKTtcbmNvbnNvbGUubG9nKHBsYXllcilcbmV4cG9ydCB7XG4gIGJvYXJkLCBib2FyZDIsIGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLFxufTtcbiIsImNvbnN0IHBsYXllciA9ICdwbGF5ZXInO1xuXG5leHBvcnQgeyBwbGF5ZXIgfTtcbiIsImltcG9ydCB7Ym9hcmQyfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKG5hbWUgPSBudWxsLCBsZW5ndGggPSBudWxsLCBoaXRUaW1lcyA9IDAsIGlzU3VuayA9IGZhbHNlKSB7XG4gIGNvbnN0IGhpdCA9IChvYmopID0+IHsgb2JqLmhpdFRpbWVzICs9IDEgfTtcblxuICBjb25zdCBpc1N1bmtGbiA9IChvYmosIHNoaXBMZW5ndGgsIGhpdHMpID0+IHtcbiAgICBpZiAoc2hpcExlbmd0aCA9PT0gaGl0cykge1xuICAgICAgb2JqLmlzU3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gJ1NoaXAgaXMgc3Vuayc7XG4gICAgfSBcbiAgICByZXR1cm4gJ1NoaXAgaXMgYWxpdmUnO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSwgbGVuZ3RoLCBoaXRUaW1lcywgaXNTdW5rLCBoaXQsIGlzU3Vua0ZuLFxuICB9O1xufVxuLy9jb25zdCBteVNoaXAxID0gU2hpcCgnQ2FycmllcicsIDUpO1xuLy9jb25zb2xlLmxvZyhteVNoaXAxKTtcbi8vcHJpbnRNZSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zaGlwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
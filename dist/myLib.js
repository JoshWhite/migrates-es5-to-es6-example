(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.myLib = {})));
}(this, (function (exports) { 'use strict';

	var addOne = function addOne(num) {
	  return num + 1;
	};

	exports.addOne = addOne;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

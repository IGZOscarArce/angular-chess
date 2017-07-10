(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.chess = factory();
    }
}(this, function () {
	var chess = require('chess.js');
	var Chess = function (fen) { return chess(fen); }

	return Chess;
}));

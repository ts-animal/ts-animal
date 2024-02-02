"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listColors = exports.getRandomColor = exports.COLOR = void 0;
exports.COLOR = {
    reset: '\x1b[0m',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    brightRed: '\x1b[91m',
    brightGreen: '\x1b[92m',
    brightYellow: '\x1b[93m',
    brightBlue: '\x1b[94m',
    brightMagenta: '\x1b[95m',
    brightCyan: '\x1b[96m',
    brightWhite: '\x1b[97m',
};
var COLOR_KEYS = Object.keys(exports.COLOR).filter(function (key) {
    return key !== 'reset' &&
        !key.toLowerCase().includes('black') &&
        !key.toLowerCase().includes('white');
});
function getRandomColor() {
    var randomColorKey = COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)];
    return exports.COLOR[randomColorKey];
}
exports.getRandomColor = getRandomColor;
function listColors() {
    return Object.keys(exports.COLOR)
        .filter(function (e) { return e !== 'reset'; })
        .map(function (e) { return "".concat(exports.COLOR[e]).concat(e).concat(exports.COLOR.reset); })
        .join(', ');
}
exports.listColors = listColors;

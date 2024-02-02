"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = void 0;
function help() {
    var msg = "\ndance {animal} {option}     show animal ascii animation.\n    --speed=[0~2000]        frame speed.\n    --repeat=[1~...]        repeat times. default is infinite.\n    --color=[random, ...]   color. default is white.\nlist                        show current animal list.\nhelp                        show current this helping message.\nversion                     show ts-animal version.\ncolors                      show supported colors.\n";
    console.log(msg);
    return msg;
}
exports.help = help;

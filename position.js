"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function input(callback) {
    rl.question("Введите число N: ", function (N) {
        rl.question("Введите позицию P: ", function (P) {
            callback(N, parseInt(P));
            rl.close();
        });
    });
}
function output(N, P) {
    if (P <= 0 || P > N.length) {
        console.log("Некорректная позиция P");
    }
    else {
        var result = N[N.length - P];
        console.log(result);
    }
}
function main() {
    input(function (N, P) {
        output(N, P);
    });
}
main();

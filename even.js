"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Функция для подсчёта чётных цифр в числе
function count(x) {
    var counter = 0;
    if (x === 0) { // если число = 0, то у него одна чётная цифра
        counter = 1;
    }
    else {
        if (x < 0) {
            x = -x; // Преобразуем отрицательное число в положительное
        }
        while (x > 0) {
            var digit = x % 10; // остаток от деления на 10 = последняя цифра
            if (digit % 2 === 0) {
                counter++;
            }
            x = Math.floor(x / 10); // округляет аргумент до ближайшего меньшего целого
        }
    }
    return counter;
}
function main() {
    rl.question("Введите количество чисел: ", function (nInput) {
        var n = parseInt(nInput);
        function askForNumber(i) {
            if (i < n) {
                rl.question("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(i + 1, ": "), function (input) {
                    var number = parseInt(input);
                    console.log("\u041A\u043E\u043B-\u0432\u043E \u0447\u0451\u0442\u043D\u044B\u0445 \u0446\u0438\u0444\u0440 \u0432 \u0447\u0438\u0441\u043B\u0435 ".concat(number, ": ").concat(count(number)));
                    askForNumber(i + 1);
                });
            }
            else {
                rl.close();
            }
        }
        askForNumber(0);
    });
}
// Вызов основной функции
main();

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Функция для ввода строки с кольцами
function input(callback) {
rl.question("Введите строку: ", (rings) => {
callback(rings);
rl.close();
});
}

// Функция для вывода результата
function output(result) {
console.log("Количество стержней с 3 цветами: " + result);
}

function main() {
input((rings) => {
// Объект, где ключ - стержень, а значение - множество (Set) (хранить только уникальные значения)
let ma = { 0: new Set(), 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(),
5: new Set(), 6: new Set(), 7: new Set(), 8: new Set(), 9: new Set() };

// Проходим по строке с кольцами и цветами
for (let i = 0; i < rings.length; i += 2) {
let color = rings[i]; // Цвет кольца
let rod = parseInt(rings[i + 1]); // Стержень кольца //parseInt(rings[i + 1]) используется для преобразования символа в число.
ma[rod].add(color); // Добавляем цвет в соответствующий стержень
}

let result = 0; // Количество стержней с 3 цветами

// Считаем содержимое массива
for (let i = 0; i < 10; i++) {
if (ma[i].size === 3) { // Если на стержне все 3 цвета, добавляем 1 к результату
result++;
}
}

output(result);
});
}

// Вызов основной функции
main();
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Функция для ввода строки с кольцами
function input(callback: (rings: string) => void): void {
rl.question("Введите строку: ", (rings: string) => {
callback(rings);
rl.close();
});
}

// Функция для вывода результата
function output(result: number): void {
console.log("Количество стержней с 3 цветами: " + result);
}

function main(): void {
input((rings: string) => {
// Объект, где ключ - номер стержня, а значение - Set цветов
const rods: { [key: number]: Set<string> } = {};
// Инициализируем стержни
for (let i = 0; i < 10; i++) {
rods[i] = new Set<string>();
}

// Проходим по строке с кольцами и цветами
for (let i = 0; i < rings.length; i += 2) {
const color: string = rings[i]; // Цвет кольца
const rod: number = parseInt(rings[i + 1]); // Стержень кольца
rods[rod].add(color); // Добавляем цвет в соответствующий стержень
}

let result: number = 0; // Количество стержней с 3 цветами

// Считаем стержни с 3 цветами
for (let i = 0; i < 10; i++) {
if (rods[i].size === 3) {
result++;
}
}

output(result);
});
}
// Вызов основной функции
main();
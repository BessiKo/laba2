import * as readline from 'readline';

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Функция для подсчёта чётных цифр в числе
function count(x: number): number {
let counter: number = 0;
if (x === 0) { // если число = 0, то у него одна чётная цифра
counter = 1;
} else {
if (x < 0) {
x = -x; // Преобразуем отрицательное число в положительное
}
while (x > 0) {
const digit: number = x % 10; // остаток от деления на 10 = последняя цифра
if (digit % 2 === 0) {
counter++;
}
x = Math.floor(x / 10); // округляет аргумент до ближайшего меньшего целого
}
}
return counter;
}

function main(): void {
rl.question("Введите количество чисел: ", (nInput: string) => {
const n: number = parseInt(nInput);

function askForNumber(i: number): void {
if (i < n) {
rl.question(`Введите число ${i + 1}: `, (input: string) => {
const number: number = parseInt(input);
console.log(`Кол-во чётных цифр в числе ${number}: ${count(number)}`);
askForNumber(i + 1);
});
} else {
rl.close();
}
}

askForNumber(0);
});
}

// Вызов основной функции
main();
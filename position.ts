import * as readline from 'readline';

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function input(callback: (N: string, P: number) => void): void {
rl.question("Введите число N: ", (N: string) => {
rl.question("Введите позицию P: ", (P: string) => {
callback(N, parseInt(P));
rl.close();
});
});
}

function output(N: string, P: number): void {
if (P <= 0 || P > N.length) {
console.log("Некорректная позиция P");
} else {
const result: string = N[N.length - P];
console.log(result);
}
}

function main(): void {
input((N: string, P: number) => {
output(N, P);
});
}
main();
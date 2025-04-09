<?php
// Функция для ввода числа и позиции
function input(&$N, &$P) {
    echo "Введите число N: ";
    $N = trim(fgets(STDIN)); // fgets(STDIN) считывает строку, введённую пользователем, из стандартного ввода
    echo "Введите позицию P: ";
    $P = intval(trim(fgets(STDIN))); // intval() преобразует введённое значение в целое число
}

// Функция для вывода символа на указанной позиции
function output($N, $P) {
    if ($P <= 0 || $P > strlen($N)) {
        echo "Некорректная позиция P" . PHP_EOL; // PHP_EOL используется для переноса строки
    } else {
        $result = $N[strlen($N) - $P];
        echo $result . PHP_EOL;
    }
}

$N = "";
$P = 0;

input($N, $P);
output($N, $P);
?>
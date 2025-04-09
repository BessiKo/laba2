<?php
// Функция для счёта чётных цифр
function countEvenDigits($x) {
    $counter = 0;
    if ($x == 0) {
        // если число = 0, то у него одна чётная цифра
        $counter = 1;
    } else {
        if ($x < 0) {
            $x = -$x; // Преобразуем отрицательное число в положительное
        }
        while ($x > 0) {
            $digit = $x % 10; // остаток от деления на 10 = последняя цифра
            if ($digit % 2 == 0) {
                $counter++;
            }
            $x = intdiv($x, 10); // Целочисленное деление на 10
        }
    }
    return $counter;
}

echo "Введите количество чисел: ";
$n = intval(trim(fgets(STDIN)));
echo "Введите числа: " . PHP_EOL;

for ($i = 0; $i < $n; $i++) {
    $coun = intval(trim(fgets(STDIN)));
    echo "Кол-во чёт цифр в числе " . $coun . ": " . countEvenDigits($coun) . PHP_EOL;
}
?>
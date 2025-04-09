import java.util.Scanner

// Функция для счёта чётных цифр
fun count(x: Int): Int {
    var counter = 0
    var num = x

    if (num == 0) { // если число = 0, то у него одна чётная цифра
        counter = 1
    } else {
        if (num < 0){
        num = (-1) * num// Преобразуем отрицательное число в положительное
        }
        while (num > 0) {
            val digit = num % 10 // остаток от деления на 10 = последняя цифра
            if (digit % 2 == 0) {
                counter++
            }
            num /= 10
        }
    }
    return counter
}

fun main() {
    val scanner = Scanner(System.`in`)
    print("Введите количество чисел: ")
    val n = scanner.nextInt()
    println("Введите числа: ")

    for (i in 1..n) {
        val coun = scanner.nextInt()
        println("Кол-во чёт цифр в числе $coun: ${count(coun)}")
    }
}
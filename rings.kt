import java.util.Scanner

fun input(rings: StringBuilder) {
    val scanner = Scanner(System.`in`)
    print("Введите строку: ")
    rings.append(scanner.nextLine())
}

fun output(result: Int) {
    println("Количество стержней с 3 цветами: $result")
}

fun main() {
    val rings = StringBuilder()
    input(rings)

    // Создает изменяемую карту ma, где ключ — это номер стержня (Int), а значение — множество (MutableSet) символов (Char), представляющих цвета.
    val ma = mutableMapOf<Int, MutableSet<Char>>()
    Заполняет карту ma пустыми множествами для каждого стержня от 0 до 9.
    for (i in 0..9) {
        ma[i] = mutableSetOf()
    }

    // Проходим по строке с кольцами и цветами
    for (i in rings.indices step 2) {
        val color = rings[i] // Цвет кольца
        val rod = Character.getNumericValue(rings[i + 1]) //  Преобразует символ стержня в число с помощью Character.getNumericValue.
        ma[rod]?.add(color) // Добавляем цвет в соответствующий стержень
        //?.add(color): Если ma[rod] не равно null, то вызывается метод add(color) для добавления цвета color в множество, связанное с ключом rod. Если ma[rod] равно null, то метод add(color) не вызывается, и ничего не происходит.
    }

    var result = 0 // кол-во стержней с 3 цветами

    // считаем содержимое массива
    for (i in 0..9) {
        if (ma[i]?.size == 3) { // если на стержне все 3 цвета, добавляем 1 к результату
            result++
        }
    }

    output(result)
}
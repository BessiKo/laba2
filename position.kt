import java.util.Scanner

fun input(): Pair<String, Int> {
    val scanner = Scanner(System.`in`)
    print("Введите число N: ")
    val N = scanner.nextLine()
    print("Введите позицию P: ")
    val P = scanner.nextInt()
    return Pair(N, P)
}

fun output(N: String, P: Int) {
    if (P <= 0 || P > N.length) {
        println("Некорректная позиция P")
    } else {
        val result = N[N.length - P]
        println(result)
    }
}

fun main() {
    val (N, P) = input()// В Kotlin нельзя просто создать переменную типа Int без инициализации.
    output(N, P)
}
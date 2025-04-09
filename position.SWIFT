import Foundation //работы с вводом-выводом 

// Функция для ввода числа и позиции
func input() -> (number: String, position: Int) {
    print("Введите число N: ", terminator: "")//terminator: "" — означает, что следующий вывод будет на этой же строке (без перевода строки
    guard let number = readLine() else {//guard let — проверяет, что ввод не nil (если пользователь ничего не ввёл, завершает функцию и возвращает пустую строку и 0
        return ("", 0)
    }
    
    print("Введите позицию P: ", terminator: "")
    guard let positionString = readLine(), let position = Int(positionString) else {//Считываем строку и пытаемся преобразовать её в число (Int).
        return (number, 0)
    }
    
    return (number, position)
}

// Функция для вывода символа на указанной позиции
func output(number: String, position: Int) {
    if position <= 0 || position > number.count {
        print("Некорректная позиция P")
    } else {
        //number.endIndex — индекс конца строки.
        //offsetBy: -position — смещаемся от конца строки на P символов назад.
        //number[index] — получаем символ по вычисленному индексу.

        let index = number.index(number.endIndex, offsetBy: -position)
        let result = number[index]
        print(result)
    }
}

let (N, P) = input()
output(number: N, position: P)
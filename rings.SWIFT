import Foundation

// Функция для ввода строки с кольцами
func input() -> String {
    print("Введите строку: ", terminator: "")//terminator: "" — означает, что следующий вывод будет на этой же строке (без перевода строки
    guard let rings = readLine() else {/guard let — проверяет, что ввод не nil (если пользователь ничего не ввёл, завершает функцию и возвращает пустую строку и 0
        return ""
    }
    return rings
}

// Функция для вывода результата
func output(result: Int) {
    print("Количество стержней с 3 цветами: \(result)")
}
import Foundation

// Функция для ввода строки с кольцами
func input() -> String {
    print("Введите строку: ", terminator: "")//terminator: "" — означает, что следующий вывод будет на этой же строке (без перевода строки
    guard let rings = readLine() else {/guard let — проверяет, что ввод не nil (если пользователь ничего не ввёл, завершает функцию и возвращает пустую строку и 0
        return ""
    }
    return rings
}

// Функция для вывода результата
func output(result: Int) {
    print("Количество стержней с 3 цветами: \(result)")
}

func main() {
    let rings = input()
    
    // Словарь, где ключ - стержень (Int), значение - Set<Character> (хранит только уникальные цвета)
    var rodColors: [Int: Set<Character>] = [
        0: [], 1: [], 2: [], 3: [], 4: [],
        5: [], 6: [], 7: [], 8: [], 9: []
    ]
    
    // Проходим по строке с шагом 2 (цвет + стержень)
    let ringsArray = Array(rings)//Преобразует строку rings в массив символов 
    for i in stride(from: 0, to: ringsArray.count, by: 2) where i + 1 < ringsArray.count {
        let color = ringsArray[i]  // Цвет кольца
        let rodChar = ringsArray[i + 1]  // Стержень (символ)
        
        guard let rod = Int(String(rodChar)) else {//Преобразует символ стержня в число (Int)
            continue
        }
        
        // Добавляем цвет в соответствующий стержень
        rodColors[rod]?.insert(color)//? — опциональная цепочка (если rod нет в словаре, операция игнорируется).
    }
    
    var result = 0  // Количество стержней с 3 цветами
    
    // Проверяем каждый стержень
    for rod in 0..<10 {
        if let colors = rodColors[rod], colors.count == 3 {
            result += 1
        }
    }
    
    output(result: result)
}

// Вызываем основную функцию
main()
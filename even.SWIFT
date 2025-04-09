import Foundation

func countEvenDigits(in number: Int) -> Int {
    var counter = 0
    var x = number
    
    if x == 0 {
        return 1
    }
    
    if x < 0 {
        x *= -1
    }
    
    while x > 0 {
        let digit = x % 10
        if digit % 2 == 0 {
            counter += 1
        }
        x /= 10
    }
    
    return counter
}

func main() {
    print("Введите количество чисел: ", terminator: "")
    guard let n = Int(readLine() ?? ""), n > 0 else {
        print("Ошибка: требуется ввести положительное число")
        return
    }
    
    for i in 1...n {
        print("Введите число \(i): ", terminator: "")
        guard let number = Int(readLine() ?? "") else {
            print("Ошибка: введите целое число")
            continue
        }
        
        let evenCount = countEvenDigits(in: number)
        print("Кол-во чёт цифр в числе \(number): \(evenCount)")
    }
    exit(0)  // Явный выход из программы
}
main()
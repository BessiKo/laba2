use std::io;

// Функция для подсчёта чётных цифр в числе
fn count_even_digits(mut x: i32) -> i32 {
    let mut counter = 0;
    if x == 0 {
        counter = 1; // у числа 0 одна чётная цифра
    } else {
        x = x.abs(); // работаем с абсолютным значением числа
        while x > 0 {
            let digit = x % 10;
            if digit % 2 == 0 {
                counter += 1;
            }
            x /= 10;
        }
    }
    counter
}

fn main() {
    println!("Введите количество чисел: ");
    let mut n = String::new();
    io::stdin()
        .read_line(&mut n)
        .expect("Не удалось прочитать строку");
    let n: i32 = n.trim().parse().expect("Ожидалось целое число"); // Преобразуем строку в число типа i32
    
    println!("Вводите числа по одному:");
    
    for _ in 0..n {
        let mut num = String::new();
        io::stdin()
            .read_line(&mut num)
            .expect("Не удалось прочитать строку");
        let num: i32 = num.trim().parse().expect("Ожидалось целое число");
        let result = count_even_digits(num);
        println!("Кол-во чёт цифр в числе {}: {}", num, result);
    }
}
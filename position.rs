use std::io; // Модуль ввода-вывода, который позволяет читать данные с клавиатуры

// Функция для ввода числа и позиции
fn input() -> (String, usize) { // Возвращает кортеж (String, usize)
    println!("Введите число N: ");
    let mut n = String::new(); // Пустая изменяемая (mut) строка n
    io::stdin()
        .read_line(&mut n)
        .expect("Ошибка чтения строки"); // Читает введённую строку и сохраняет её в n
    let n = n.trim().to_string(); // Удаляет пробелы и символы перевода строки (\n)

    println!("Введите позицию P: ");
    let mut p = String::new();
    io::stdin()
        .read_line(&mut p)
        .expect("Ошибка чтения строки");
    let p: usize = p.trim()
        .parse()
        .expect("Ожидалось целое число"); // Преобразует строку в число (usize)

    (n, p)
}

// Функция для вывода символа на указанной позиции
fn output(n: &str, p: usize) {
    if p == 0 || p > n.len() {
        println!("Некорректная позиция P");
    } else {
        let result = n.chars()
            .nth(n.len() - p)
            .unwrap(); // Получаем символ на нужной позиции
        println!("{}", result);
    }
}

fn main() {
    let (n, p) = input();
    output(&n, p);
}
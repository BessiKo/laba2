use std::collections::{HashMap, HashSet};
use std::io;

// Функция для ввода строки с кольцами
fn input() -> String {
    println!("Введите строку: ");
    let mut rings = String::new(); // Создание новой изменяемой строки для хранения ввода
    io::stdin()
        .read_line(&mut rings)
        .expect("Не удалось прочитать строку");
    rings.trim().to_string() // Удаление пробелов и переводов строки, возврат строки
}

// Функция для вывода результата
fn output(result: i32) {
    println!("Количество стержней с 3 цветами: {}", result);
}

fn main() {
    let rings = input();
    // Создаем HashMap, где ключ - стержень, значение - HashSet цветов
    let mut rods: HashMap<i32, HashSet<char>> = HashMap::new(); // i32 дефолтный целочисленный тип в Rust
    
    // Инициализируем стержни от 0 до 9
    for i in 0..10 {
        rods.insert(i, HashSet::new());
    }
    
    // Обрабатываем строку по два символа за раз
    let mut chars = rings.chars();
    while let (Some(color), Some(rod_char)) = (chars.next(), chars.next()) {
        // Чтение по два символа
        let rod = rod_char.to_digit(10).expect("Ожидалась цифра") as i32; // Преобразование символа в цифру
        rods.get_mut(&rod)
            .unwrap()
            .insert(color); // Получение изменяемой ссылки на стержень, извлечение значения, добавление цвета в множество
    }
    
    // Считаем стержни с 3 цветами
    let result = rods.values().filter(|colors| colors.len() == 3).count() as i32;
    output(result);
}
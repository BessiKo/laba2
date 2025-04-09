package main

import (
	"fmt"
)

// Функция для ввода строки с кольцами
func input() string {
	var rings string
	fmt.Print("Введите строку: ")
	fmt.Scan(&rings)
	return rings
}

// Функция для вывода результата
func output(result int) {
	fmt.Printf("Количество стержней с 3 цветами: %d\n", result)
}

func main() {
	rings := input()

	// Карта для хранения цветов на каждом стержне
	rodColors := make(map[int]map[rune]struct{})
	
	// Инициализация карты для 10 стержней (0-9)
	for i := 0; i < 10; i++ {
		rodColors[i] = make(map[rune]struct{})
	}

	// Обработка строки колец (цвет и номер стержня)
	for i := 0; i < len(rings); i += 2 {
		color := rune(rings[i])      // Цвет кольца
		rod := int(rings[i+1] - '0') // Номер стержня
		rodColors[rod][color] = struct{}{} // Добавляем цвет к стержню
	}

	result := 0 // Счётчик стержней с 3 цветами

	// Подсчёт стержней с тремя разными цветами
	for i := 0; i < 10; i++ {
		if len(rodColors[i]) == 3 {
			result++
		}
	}

	output(result)
}
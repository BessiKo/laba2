package main

import (
	"fmt"
)

// Функция для ввода числа и позиции
func input() (string, int) {
	var N string
	var P int

	fmt.Print("Введите число N: ")
	fmt.Scan(&N)
	fmt.Print("Введите позицию P: ")
	fmt.Scan(&P)

	return N, P
}

// Функция для вывода символа на указанной позиции
func output(N string, P int) {
	if P <= 0 || P > len(N) {
		fmt.Println("Некорректная позиция P")
	} else {
		result := N[len(N)-P]
		fmt.Println(string(result))
	}
}

func main() {
	N, P := input()
	output(N, P)
}
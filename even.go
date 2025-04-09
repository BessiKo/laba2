package main

import (
"fmt"
"math"
)

// Функция для счёта чётных цифр
func count(x int) int {
	counter := 0
	if x == 0 {
		// если число = 0, то у него одна чётная цифра
		counter = 1
		} else {
			if x < 0 {
				x = x * (-1)
			}
			for x > 0 {
				digit := x % 10 // остаток от деления на 10 = последняя цифра
				if digit%2 == 0 {
					counter++
				}
				x /= 10
			}
		}
	return counter
}

func main() {
var n int
fmt.Print("Введите количество чисел: ")
fmt.Scan(&n)
fmt.Print("Введите числа: ")

for i := 0; i < n; i++ {
var coun int
fmt.Scan(&coun)
fmt.Printf("Кол-во чёт цифр в числе %d: %d\n", coun, count(coun))
}
}
#include <iostream>
#include <cmath>

using namespace std;

// Функция для счёта чётных цифр
int count(int x) {
    int counter = 0;
    if (x == 0){// если число = 0, то у него одна чётная цифра
        counter = 1;
    } else{
        if (x < 0){
            x = x * (-1); // Преобразуем отрицательное число в положительное
        }
        while (x > 0) {
            int digit = x % 10; // остаток от деления на 10 = последняя цифра
                if (digit % 2 == 0) {
                    counter++;
                }
            x /= 10;
        }
    }
    return counter;
}

int main() {
int n;
cout << "Введите количество чисел: ";
cin >> n;
cout << "Введите числа: ";

for (int i = 0; i < n; i++) {
    int coun;
    cin >> coun;
    cout << "Кол-во чёт цифр в числе " << coun << ": " << count(coun) << endl;
}

return 0;
}
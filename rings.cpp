#include <iostream>
#include <map>
#include <set>
#include <string>

using namespace std;

// Функция для ввода строки с кольцами
string input() {
    string rings;
    cout << "Введите строку: ";
    cin >> rings;
    return rings;
}

// Функция для вывода результата
void output(int result) {
    cout << "Количество стержней с 3 цветами: " << result << endl;
}

int main() {
    string rings = input();
    // контейнер, где ключ - стержень, а значение - Множество (set) (хранить только уникальные значения) 
    map<int, set<char>> ma = {{0, {}}, {1, {}}, {2, {}}, {3, {}}, {4, {}},
    {5, {}}, {6, {}}, {7, {}}, {8, {}}, {9, {}}};

    // Проходим по строке с кольцами и цветами
    for (int i = 0; i < static_cast<int>(rings.size()); i += 2) {
        char color = rings[i]; // Цвет кольца
        int rod = rings[i + 1] - '0'; // Стержень кольца
        //- '0' — преобразует символ в число, так как rings[i + 1] возвращает символ, а не число
        ma[rod].insert(color); // Добавляем цвет в соответствующий стержень
    }

    int result = 0;// кол-во стрержней с 3 цветами

    // считаем содержимое массива
    for (int i = 0; i < 10; i++) {
        int c = 0;//счётчик цветов
        for (char n : ma[i]) {
            c++;
        }
        if (c == 3){//если на стержне все 3 цвета, добавляем 1 к результату
            result ++;
        }
    }

output(result);

return 0;
}
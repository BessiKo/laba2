#include <iostream>
#include <string>

using namespace std;

// Функция для ввода числа и позиции
void input(string& N, int& P) {
    cout << "Введите число N: ";
    cin >> N;
    cout << "Введите позицию P: ";
    cin >> P;
}

// Функция для вывода символа на указанной позиции
void output(string& N, int& P) {
    if (P <= 0 || P > N.length()) {// позиция должна быть больше нуля и меньше длинны числа
        cout << "Некорректная позиция P" << endl;
    } else {
        char result = N[N.length() - P];
    cout << result << endl;
    }
}

int main() {
    string N;
    int P;

    input(N, P);
    output(N, P);

    return 0;
}
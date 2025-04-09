using System;
using System.Collections.Generic;

class Program
{
    // Метод для ввода строки с кольцами
    static string Input()
    {
        Console.Write("Введите строку: ");
        return Console.ReadLine();
    }

    // Метод для вывода результата
    static void Output(int result)
    {
        Console.WriteLine($"Количество стержней с 3 цветами: {result}");
    }

    static void Main()
    {
        string rings = Input();
        
        // Словарь, где ключ - стержень, а значение - множество для хранения уникальных цветов
        Dictionary<int, HashSet<char>> rodColors = new Dictionary<int, HashSet<char>>();
        
        // Инициализация словаря для 10 стержней (0-9)
        for (int i = 0; i < 10; i++)
        {
            rodColors[i] = new HashSet<char>();
        }

        // Обработка строки колец (цвет и номер стержня)
        for (int i = 0; i < rings.Length; i += 2)
        {
            char color = rings[i];         // Цвет кольца
            int rod = rings[i + 1] - '0'; // Номер стержня (преобразование char в int)
            rodColors[rod].Add(color);    // Добавляем цвет к стержню
        }

        int result = 0; // Счётчик стержней с 3 цветами

        // Подсчёт стержней с тремя разными цветами
        foreach (var rod in rodColors)
        {
            if (rod.Value.Count == 3)
            {
                result++;
            }
        }

        Output(result);
    }
}
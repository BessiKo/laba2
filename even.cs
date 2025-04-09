using System;

class Program
{
    // Метод для счёта чётных цифр
    static int Count(int x)
    {
        int counter = 0;
        if (x == 0)
        {
            return 1; // Если число равно 0, у него одна чётная цифра
        }
        else
        {
            if (x < 0)
            {
                x = -x; // Преобразуем отрицательное число в положительное
            }
            while (x > 0)
            {
                int digit = x % 10; // Остаток от деления на 10 = последняя цифра
                if (digit % 2 == 0)
                {
                    counter++;
                }
                x /= 10;
            }
        }
        return counter;
    }

    static void Main()
    {
        Console.Write("Введите количество чисел: ");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine("Введите числа: ");

        for (int i = 0; i < n; i++)
        {
            int number = int.Parse(Console.ReadLine());
            Console.WriteLine($"Кол-во чёт цифр в числе {number}: {Count(number)}");
        }
    }
}
using System;

class Program
{
    // Метод для ввода числа и позиции
    static void Input(out string N, out int P)
    {
        Console.Write("Введите число N: ");
        N = Console.ReadLine();
        Console.Write("Введите позицию P: ");
        P = int.Parse(Console.ReadLine()); //преобразование строки в число 
    }

    // Метод для вывода символа на указанной позиции
    static void Output(string N, int P)
    {
        int length = N.Length; // длина строки
        if (P <= 0 || P > length)
        {
            // позиция должна быть больше нуля и меньше длины числа
            Console.WriteLine("Некорректная позиция P");
        }
        else
        {
            char result = N[length - P];
            Console.WriteLine(result);
        }
    }

    static void Main()
    {
        string N;
        int P;

        Input(out N, out P);
        Output(N, P);
    }
}
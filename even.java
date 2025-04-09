import java.util.Scanner;

public class java {

    // Метод для подсчета чётных цифр
    public static int count(int x) {
        int counter = 0;
        if (x == 0) { // Если число = 0, то у него одна чётная цифра
            counter = 1;
        } else {
            if (x < 0) {
                x = x * (-1); // Преобразуем отрицательное число в положительное
            }
            while (x > 0) {
                int digit = x % 10; // Остаток от деления на 10 = последняя цифра
                if (digit % 2 == 0) {
                    counter++;
                }
                x /= 10;
            }
        }
        return counter;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите количество чисел: ");
        int n = scanner.nextInt();
        System.out.println("Введите числа: ");

        for (int i = 0; i < n; i++) {
            int coun = scanner.nextInt();
            System.out.println("Кол-во чёт цифр в числе " + coun + ": " + count(coun));
        }

        scanner.close();
    }
}
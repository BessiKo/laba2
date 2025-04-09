import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class java {

    // Метод для ввода строки с цветами и стержнями
    public static String input(Scanner scanner) {
        System.out.print("Введите строку: ");
        return scanner.nextLine();
    }

    // Метод для вывода результата
    public static void output(int result) {
        System.out.println("Количество стержней с 3 цветами: " + result);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String rings = input(scanner);

        // Создание HashMap, где ключом является номер стержня, а значением — HashSet, который хранит уникальные цвета колец. Инициализируется для 10 стержней.
        Map<Integer, Set<Character>> ma = new HashMap<>();
        for (int i = 0; i < 10; i++) {
            ma.put(i, new HashSet<>());
        }

        // Проходим по строке с кольцами и цветами
        for (int i = 0; i < rings.length(); i += 2) {
            char color = rings.charAt(i); // Цвет кольца
            int rod = Character.getNumericValue(rings.charAt(i + 1)); // Стержень кольца
            // Преобразует символ, представляющий цифру в соответствующее целое число, тк rings.charAt(i + 1) возвращает символ, а не число.
            ma.get(rod).add(color); // Добавляем цвет в соответствующий стержень
        }

        int result = 0; // Количество стержней с 3 цветами

        // Считаем содержимое массива
        for (int i = 0; i < 10; i++) {
            if (ma.get(i).size() == 3) { // Если на стержне все 3 цвета, добавляем 1 к результату
                result++;
            }
        }

        output(result);
        scanner.close();
    }
}
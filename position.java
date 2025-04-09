import java.util.Scanner; // Scanner используется для считывания ввода пользователя с клавиатуры

public class Main {

    public static void input(Scanner scanner, String[] N, int[] P) {
        System.out.print("Введите число N: ");
        N[0] = scanner.nextLine();
        System.out.print("Введите позицию P: ");
        P[0] = scanner.nextInt();
    }

    public static void output(String N, int P) {
        if (P <= 0 || P > N.length()) {
            System.out.println("Некорректная позиция P");
        } else {
            char result = N.charAt(N.length() - P);
            System.out.println(result);
        }
    }

    public static void main(String[] args) {
        String[] N = new String[1];
        int[] P = new int[1];

        Scanner scanner = new Scanner(System.in);
        input(scanner, N, P);
        output(N[0], P[0]);

        scanner.close();
    }
}
def count(x):
counter = 0
if x == 0:
    # Если число равно 0, то у него одна чётная цифра
    counter = 1
    else:
        if x < 0:
            x = (-1)*x # Преобразуем отрицательное число в положительное
            while x > 0:
                digit = x % 10 # Остаток от деления на 10 = последняя цифра
                if digit % 2 == 0:
                    counter += 1
                    x //= 10 # Удаляем последнюю цифру
                    return counter

n = int(input("Введите количество чисел: "))
i = 0
while i < n:
    i += 1
    number = int(input())
    print(f"Кол-во чёт цифр в числе {number}: {count(number)}")
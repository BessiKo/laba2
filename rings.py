def input_rings():
    rings = input("Введите строку: ")
    return rings

def output_result(result):
    print(f"Количество стержней с 3 цветами: {result}")

rings = input_rings()

# Словарь для хранения уникальных цветов на каждом стержне
rod_colors = {i: set() for i in range(10)}

# Проходим по строке с кольцами и цветами
for i in range(0, len(rings), 2):
    color = rings[i] # Цвет кольца
    rod = int(rings[i + 1]) # Стержень кольца
    rod_colors[rod].add(color) # Добавляем цвет в соответствующий стержень

result = 0 # Количество стержней с 3 цветами

# Считаем количество стержней с 3 цветами
for rod in rod_colors:
    if len(rod_colors[rod]) == 3:
        result += 1

output_result(result)
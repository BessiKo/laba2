# Функция для подсчёта чётных цифр в числе
def count_even_digits(x)
    return 1 if x == 0  # У нуля одна чётная цифра
    
    x = x.abs           # Работаем с абсолютным значением числа
    counter = 0
    
    while x > 0
      digit = x % 10     # Получаем последнюю цифру
      counter += 1 if digit % 2 == 0
      x /= 10            # Удаляем последнюю цифру
    end
    
    counter
  end
  
  # Основная программа
  print "Введите количество чисел: "
  n = gets.chomp.to_i# Считываем ввод и преобразуем в целое число
  
  puts "Введите числа по одному:"
  
  n.times do |i| # Повторяем n раз (i = 0,1,2...n-1)  print "Число #{i + 1}: "
    num = gets.chomp.to_i
    even_count = count_even_digits(num)
    puts "кол-во чётных цифр: #{even_count}" # Выводим результат
  end
def input_values():
    N = input("Введите число N: ")
    P = int(input("Введите позицию P: "))
    return N, P

def output_value(N, P):
    if P <= 0 or P > len(N):
        print("Некорректная позиция P")
    else:
        result = N[-P]
        print(result)


N, P = input_values()
output_value(N, P)
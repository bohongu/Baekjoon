A = int(input())
B = int(input())
C = int(input())

calc = list(str(A * B * C))

for i in range(10):
    print(calc.count(str(i)))

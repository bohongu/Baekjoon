N = int(input())  # 26

n = N
cnt = 0

while True:
    a = n//10  # 2
    b = n % 10  # 6
    c = (a + b) % 10  # 8
    n = b * 10 + c  # 68
    cnt += 1
    if n == N:
        break
print(cnt)

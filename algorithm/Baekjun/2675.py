T = int(input())

for i in range(T):
    R, S = input().split()
    result = ''
    for i in S :
        result += i*int(R)
    print(result)
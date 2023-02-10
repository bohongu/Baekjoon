N = input()
num_list = []

for i in N:
    num_list.append(i)
num_list.sort(reverse=True)

for i in num_list:
    print(i, end='')

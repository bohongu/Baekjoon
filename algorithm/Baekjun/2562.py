num_list = []

for _ in range(9):
    i = int(input())
    num_list.append(i)

print(max(num_list))
print(num_list.index(max(num_list)) + 1)

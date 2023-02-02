num_list = []

for _ in range(10):
    i = int(input())
    n = i % 42
    num_list.append(n)
num_list = set(num_list)
print(len(num_list))

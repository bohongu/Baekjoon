N = int(input())
str_list = []

for _ in range(N):
    str_list.append(input())

set_str_list = list(set(str_list))
set_str_list.sort()
set_str_list.sort(key=len)

for i in set_str_list:
    print(i)

import sys
from collections import Counter

N = int(sys.stdin.readline())
num_list = []

for _ in range(N):
    num_list.append(int(sys.stdin.readline()))


# 산술평균
print(round(sum(num_list)/N))

# 중앙값
num_list.sort()
print(num_list[N//2])

# 최빈값
count = Counter(num_list).most_common()
if len(num_list) > 1 and count[0][1] == count[1][1]:
    print(count[1][0])
else:
    print(count[0][0])

# 범위
print(max(num_list) - min(num_list))

N = int(input())
scores = list(map(int, input().split()))
avg = 0
max_score = max(scores)

for score in scores:
    new_score = score/max_score * 100
    avg += new_score
print(avg/N)

T = int(input())

for _ in range(T):
    score_list = list(map(int, input().split()))
    avg = sum(score_list[1:])/(len(score_list) - 1)
    cnt = 0
    for score in score_list[1:]:
        if avg < score:
            cnt += 1
    result = cnt/(len(score_list) - 1) * 100
    print(f"{result:.3f}%")

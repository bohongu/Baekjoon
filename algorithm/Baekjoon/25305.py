N, k = map(int, input().split())

score_list = list(map(int, input().split()))

score_list = sorted(score_list)

print(score_list[N - k])

T = int(input())

for _ in range(T):
    result_list = list(input())
    score = 0
    sum_score = 0
    for result in result_list:
        if result == 'O':
            score += 1
            sum_score += score
        else:
            score = 0
    print(sum_score)

def hansu(num):
    hansu_cnt = 0
    if num < 100:
        hansu_cnt = num
    else:
        hansu_cnt = 99
        for i in range(100, num+1):
            num_list = list(map(int, str(i)))
            if num_list[0] - num_list[1] == num_list[1] - num_list[2]:
                hansu_cnt += 1
    return hansu_cnt


N = int(input())
print(hansu(N))

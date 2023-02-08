words = input().upper()
word_list = list(set(words))

cnt_list = []

for word in word_list:
    cnt_list.append(words.count(word))
if cnt_list.count(max(cnt_list)) > 1:
    print('?')
else:
    print(word_list[cnt_list.index(max(cnt_list))])

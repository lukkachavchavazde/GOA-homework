# 1) გააკეთეთ manual_isalnum() ფუნქცია
def manual_isalnum(c):
    for char in c:
        if not ('a' <= char <= 'z' or 'A' <= char <= 'Z' or '0' <= char <= '9'):
            return False
    if c == "":
        return False
    return True

# 2) გააკეთეთ manual_startswith() ფუნქცია
def manual_startswith(k):
    start = "abc"
    i=0
    try:
        while True:
            if start[i] != k[i]:
                return False
            i += 1
    except:
        pass
    try:
        start[i]
        return False
    except:
        return True





# 3) გააკეთეთ manual_endswith() ფუნქცია
def  manual_endswith(m):
    ends = "xyz"
    num1 = 0
    for l in m:
        num1 += 1
    num2 = 0
    for l in ends:
        num2 += 1
    if num2 > num1:
        return False
    i = 0
    while i < num2:
        if m[num1 - num2 + i]  != ends[i]:
            return False
        i += 1
    return True








# 4) გააკეთეთ manual_round() ფუნქცია
def manual_round(num):
    if num >= 0:
        if num - int(num) >= 0.5:
            return int(num) + 1
        else:
            return int(num)
    else:
        if num - int(num) <= -0.5:
            return int(num) - 1
        else:
            return int(num)





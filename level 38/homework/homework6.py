words = ["hello", "world", "my", "name", "is", "luka"]

modified_words = list(map(lambda x: x[0] + "-start" + x, words))

print(modified_words)

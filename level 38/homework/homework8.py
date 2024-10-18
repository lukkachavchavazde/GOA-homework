words = ["apple", "banana", "Avocado", "grape", "Apricot", "orange"]

a_words = list(filter(lambda x: x.lower().startswith('a'), words))

print(a_words)

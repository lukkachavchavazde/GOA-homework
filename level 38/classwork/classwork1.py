def create_sentence(*words):
    return ' '.join(words[:7]) + '.'

sentence = create_sentence("GOA", "is", "the", "best", "academy")
print(sentence)

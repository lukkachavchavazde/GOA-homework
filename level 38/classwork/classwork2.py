def filter_sentence(sentence):
    bad_words = ['ზარმაცი', 'მეზარება']
    words = sentence.split()
    filtered_words = [word for word in words if word not in bad_words]
    return ' '.join(filtered_words)

original_sentence = "მე ზარმაცი ვარ და მეზარება ყველაფრის გაკეთება."
filtered_sentence = filter_sentence(original_sentence)
print(filtered_sentence)

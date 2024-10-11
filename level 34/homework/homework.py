def sum_numbers(values):
    return sum(int(x) for x in values if str(x).isdigit())

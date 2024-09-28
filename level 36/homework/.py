products = {
    "bread": True,
    "milk": False,
    "fruit": True,
    "vegetables": False,
    "berries": True
}

out_of_stock = dict(filter(lambda item: not item[1], products.items()))

print(out_of_stock)

# Define a procedure, bigger, that takes in
# two numbers as inputs, and returns the
# greater of the two inputs.

def bigger(x, y):
    if x > y:
        return x
    return y

# def bigger(x, y):
#     if x > y:
#         return x
#     else:
#         return y

print(bigger(2, 7))
#>>> 7
print(bigger(3, 2))
#>>> 3
print(bigger(3, 3))
#>>> 3
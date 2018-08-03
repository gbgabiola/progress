# Define a procedure, biggest, that takes three
# numbers as inputs and returns the largest of
# those three numbers.

def bigger(x, y):
    if x > y:
        return x
    else:
        return y

def biggest(x, y, z):
    return bigger(bigger(x, y), z) # using the previous defined bigger

# using and operator
# def biggest(x, y, z):
#     if x > y and x > z:
#         return x
#     else:
#         if y > x and y > z:
#             return y
#         else:
#             return z

# typical way, a long way solution
# def biggest(x, y, z):
#     if x > y:
#         if x > z:
#             return x
#         else:
#             return z
#     else:
#         if y > z:
#             return y
#         else:
#             return z

# using built in operator max
# def biggest(x, y, z):
#     return max(x, y, z)

print(biggest(6, 2, 3))
#>>>  6
print(biggest(6, 2, 7))
#>>>  7
print(biggest(6, 9, 3))
#>>>  9
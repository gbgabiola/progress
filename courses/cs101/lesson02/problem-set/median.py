# Define a procedure, median, that takes three
# numbers as its inputs, and returns the median
# of the three numbers.

# Make sure your procedure has a return statement.

def bigger(x, y):
    if x > y:
        return x
    else:
        return y

def biggest(x, y, z):
    return bigger(x, bigger(y, z))

def median(x, y, z):
    big = biggest(x, y, z)
    if big == x:
        return bigger(y, z)
    if big == y:
        return bigger(x, z)
    else:
        return bigger(x, y)

print(median(1, 2, 3))
#>>> 2
print(median(9, 3, 6))
#>>> 6
print(median(7, 8, 7))
#>>> 7
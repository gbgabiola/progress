# Define a procedure, abbaize, that takes
# two strings as its inputs, and returns
# a string that is the first input,
# followed by two repetitions of the second input,
# followed by the first input.

def abbaize(x, y):
    # return x + y + y + x
    return x + y * 2 + x

print(abbaize('a', 'b'))
#>>> abba
print(abbaize('dog', 'cat'))
#>>> dogcatcatdog
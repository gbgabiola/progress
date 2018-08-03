# Define a procedure, print_numbers, that takes
# as input a positive whole number, and prints 
# out all the whole numbers from 1 to the input
# number.

# Make sure your procedure prints "upwards", so
# from 1 up to the input number.

# initializing from 1
# def print_numbers(n):
#     i = 1
#     while i <= n:
#         print(i)
#         i = i + 1

# initializing from 0
def print_numbers(n):
    i = 0
    while i < n:
        i = i + 1
        print(i)

print_numbers(3)
#>>> 1
#>>> 2
#>>> 3
# Define a procedure, greatest,
# that takes as input a list
# of positive numbers, and
# returns the greatest number
# in that list. If the input
# list is empty, the output
# should be 0.

def greatest(p):
    # other way
    # big = 0
    # for i in p:
    #     big = max(big, i)
    # return big

    big = 0
    for i in p:
        if i > big:
            big = i
    return big


print (greatest([4,23,1]))
#>>> 23
print (greatest([]))
#>>> 0

    

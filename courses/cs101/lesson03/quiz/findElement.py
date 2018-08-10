# Define a procedure, find_element,
# that takes as its inputs a list
# and a value of any type, and
# returns the index of the first
# element in the input list that
# matches the value.

# If there is no matching element,
# return -1.

def find_element(p, v):
    # using while loop
    # index = 0
    # while index < len(p):
    #     if p[index] == v:
    #         return index
    #     index += 1
    # return -1

    # using for loop
    index = -1
    for e in p:
        if e == v:
            return index
        index += 1
    return -1

print(find_element([1,2,3],3))
#>>> 2
print(find_element(['alpha','beta'],'gamma'))
#>>> -1
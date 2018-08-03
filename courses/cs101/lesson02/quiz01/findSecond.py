# Define a procedure, find_second, that takes
# two strings as its inputs: a search string
# and a target string. It should return a
# number that is the position of the second
# occurrence of the target string in the
# search string.

def find_second(search, target):
    first = search.find(target)
    # second = search.find(target, first + 1) # optional for second variable
    
    return search.find(target, first + 1)
    # return search.find(target, search.find(target) + 1) # one line solution

danton = "De l'audace, encore de l'audace, toujours de l'audace"
print(find_second(danton, 'audace'))
#>>> 25
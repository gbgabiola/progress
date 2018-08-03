# Define a procedure, find_last, that takes as input
# two strings, a search string and a target string,
# and returns the last position in the search string
# where the target string appears, or -1 if there
# are no occurrences.

# Example: find_last('aaaa', 'a') returns 3
# Make sure your procedure has a return statement.

def find_last(search, target):
    # last = search.find(target)

    # while last != -1:
    #     if search.find(target, last + 1) == -1:
    #         break
    #     last = search.find(target, last + 1)
    # return last

    last_pos = -1
    while True:
        pos = search.find(target, last_pos + 1)
        if pos == -1:
            return last_pos
        last_pos = pos

print(find_last('aaaa', 'a'))
#>>> 3
# Write Python code that initializes the variable
# start_link to be the value of the position
# where the first '<a href=' occurs in a page.

# page = contents of a web page

page = '<div class="main"><p>This is the page of <a href="http://udacity.com">Udacity</a>'

start_link = page.find('<a href=')

print(start_link)
# print(page[41:])
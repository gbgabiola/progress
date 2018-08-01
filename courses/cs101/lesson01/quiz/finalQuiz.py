# Write Python code that assigns to the 
# variable url a string that is the value 
# of the first URL that appears in a link 
# tag in the string page.
# Your code should print http://udacity.com
# Make sure that if page were changed to
# page = '<a href="http://udacity.com">Hello world</a>'
# that your code still prints the same thing.

# page = contents of a web page

page = '<div class="main"><p>This is the page of <a href="http://udacity.com">Udacity</a>'

start_link = page.find('<a href=')
start_url = page.find('"', start_link)
end_url = page.find('"', start_url + 1)
url = page[start_url + 1:end_url]

print(url)
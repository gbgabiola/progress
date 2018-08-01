# Assume text is a variable that holds 
# a string. Write Python code that 
# prints out the position of the second 
# occurrence of 'zip' in text, or -1 
# if it does not occur at least twice.
# For example, 
# text = 'zip files are zipped' # 14
# text = 'zip files are compressed' # -1

text = 'zip files are zipped'
first_zip = text.find('zip')

# print(text.find('zip', text.find('zip') + 1)) # without additional variable
print(text.find('zip', first_zip + 1)) # with additional variable
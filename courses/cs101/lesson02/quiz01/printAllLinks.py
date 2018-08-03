def get_next_target(page):
    start_link = page.find('<a href=')
    if start_link == -1:
        return None, 0    
    start_quote = page.find('"', start_link)
    end_quote = page.find('"', start_quote + 1)
    url = page[start_quote+ 1:end_quote]
    return url, end_quote

# url, endpos = get_next_target('Here is a Link')
# print(url)

def print_all_links(page):
    while True:
        url, endpos = get_next_target(page)
        if url:
            print(url)
            page = page[endpos:]
        else:
            break

print_all_links('this <a href="http://google.com">link 1</a> is <a href="http://facebook.com">link 2</a> a <a href="http://twitter.com">link 3</a>')
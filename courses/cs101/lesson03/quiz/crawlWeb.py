# Define a procedure crawl_web that takes
# as input a seed page url, and outputs a
# list of all the urls that can be reached
# by following links starting from the seed page.

def crawl_web(seed):
    tocrawl = [seed]
    crawled = []
    while tocrawl:
        page = tocrawl.pop()
        if page not in crawled:
            union(tocrawl, get_all_links(get_page(page)))
            crawled.append(page)
    return crawled
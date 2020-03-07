## Installed bs4 and requests

## module imports
import requests
from bs4 import BeautifulSoup

# using requests module get the webpage we will be scraping
result = requests.get('https://apps.cs.utexas.edu/calendar/')

# store content of webpage
src = result.content

# make sure webpage is accessible, should get 200 
print(result.status_code)

def scrapeUTCS():
    food_UTCS = ['pizza','soda','taco']
    return food_UTCS





## Installed bs4 and requests

## module imports
import requests
import json
from bs4 import BeautifulSoup

# using requests module get the webpage we will be scraping
result = requests.get('https://apps.cs.utexas.edu/calendar/')

# store content of webpage
src = result.content

# Once the page source has been stored, we will use the BeautifulSoup module
# to parse and process the source. To do so, we create a BeautifulSoup object
# based on the source variable we created above
soup = BeautifulSoup(src, 'html.parser')
soup.prettify()
# Store calendar events
# .calendar-calendar td .inner div, .calendar-calendar td .inner div a
events= []
allContent = soup.find_all("a",{"class":"colorbox-load"})
for a in allContent:
    print(a.text.strip().encode('utf-8'))
    events.append(a.text.strip())
    #print('\n')
#event_content = allContent.find_all("div",{"class":"views-field views-field-title"})
#events.append(event_content)
#print(allContent)

# make sure webpage is accessible, should get 200 
# sprint(result.status_code)

def scrapeUTCS():
    food_UTCS = ['pizza','soda','taco', 'baod up']
    food_UTCS = events
    return food_UTCS





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

# Todo
# Extract Month
# Append date of month and day
# probably use an api to convert numerical date to string date

# Store calendar events
# .calendar-calendar td .inner div, .calendar-calendar td .inner div a
events= []
allContent = soup.find_all("td",{"class":"single-day future"})
for td in allContent:
    row = []

    # nest loop to scrape each item in the day
    # for item in  td.find_all("div",{"class":"inner"}):
    #     print(item.find_all("a",{"class":"colorbox-load"}))
    #     print('\n')

    # event_name
    event_name = td.find("a",{"class":"colorbox-load"})
    print(event_name.text.strip().encode('utf-8'))
    row.append(event_name.text.strip())
    #time 
    event_time = td.find("span",{"class":"date-display-start"})
    print(event_time.text.strip().encode('utf-8'))
    row.append(event_time.text.strip())
    # event location
    event_location = td.find("div",{"class":"views-field views-field-field-location-1"})
    print(event_location.text.strip().encode('utf-8'))
    row.append(event_location.text.strip())
    # append all content info
    events.append(row)
    # print('asdf\n')


# make sure webpage is accessible, should get 200 
# sprint(result.status_code)

def scrapeUTCS():
    food_UTCS = ['pizza','soda','taco', 'baod up']
    food_UTCS = events
    return food_UTCS





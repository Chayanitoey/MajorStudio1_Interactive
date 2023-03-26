# import module 
import requests 
import pandas as pd 
from bs4 import BeautifulSoup 
  
# link for extract html data 
def getdata(url): 
    r = requests.get(url) 
    return r.text 
  
htmldata = getdata("https://population.io") 
soup = BeautifulSoup(htmldata, 'html.parser') 
print(soup)
# data = '' 
# for data in soup.find_all(class_ = "ng-binding"): 
#     print(data.get_text()) 
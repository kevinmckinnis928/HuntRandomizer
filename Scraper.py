import pandas as pd # library for data analysis
import requests # library to handle requests
from bs4 import BeautifulSoup # library to parse HTML documents
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


# get the response in the form of html
wikiurl="https://huntshowdown.fandom.com/wiki/Weapons"
table_class="wikitable mw-collapsible mw-made-collapsible"
response=requests.get(wikiurl)

# parse data from the html into a beautifulsoup object
soup = BeautifulSoup(response.text, 'html.parser')
indiatable=soup.find('table',{'class':"wikitable"})


df = pd.read_html("https://huntshowdown.fandom.com/wiki/Weapons")
df2 = pd.read_html("https://huntshowdown.fandom.com/wiki/Tools")
#print(df2)

#Create object for each table
large_weapons = pd.DataFrame(df[0])
medium_weapons = pd.DataFrame(df[1])
small_weapons = pd.DataFrame(df[2])
tools = pd.DataFrame(df2[0])

#Class gets rid of columns not needed for app and removes duplicates from data sets
def clear_useless_columns_weapons(dataset):
	dataset = dataset.drop(["Weapon", "Capacity", "Weapon stats", "Weapon stats.1", "Weapon stats.2", "Weapon stats.3"], axis=1)
	dataset = dataset.rename(columns={"Weapon.1": "Weapon"})
	return dataset.drop_duplicates()

def clear_useless_columns_tools(dataset):
	dataset = dataset.drop(["Tool", "Description", "Additional stats", "Additional stats.1", "Additional stats.2", "Additional stats.3"], axis=1)
	dataset = dataset.rename(columns={"Tool.1": "Tool"})
	return dataset.drop_duplicates()


large_weapons = clear_useless_columns_weapons(large_weapons)
medium_weapons = clear_useless_columns_weapons(medium_weapons)
small_weapons = clear_useless_columns_weapons(small_weapons)

tools = clear_useless_columns_tools(tools)
print(tools)

weapons = pd.concat([large_weapons, medium_weapons, small_weapons], axis=0)
weapons = weapons.sort_values(by=['Weapon'])
weapons.to_csv("weapons.csv", index=False)
tools.to_csv("tools.csv", index=False)
#large_weapons.to_csv("large_weapons.csv")
#medium_weapons.to_csv("medium_weapons.csv")
#small_weapons.to_csv("small_weapons.csv")


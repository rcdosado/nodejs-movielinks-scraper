# nodejs-movielinks-scraper
Scrape a specified web page for movie links and determine its title, year, quality, resolution based on the filename 

Requirements:
* express
* request
* cheerio
* parse-torrent-name
* lowdb

Just an application created for learning node.js 

# How to Use ?
For now the URL of the webpage is hardcoded, so simply replace that with the target site
the output is a JSON file that is printed in the console so you can do

```
node scraper.js > movies.json
```

at the console.

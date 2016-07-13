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
Basically this nodejs application is a CLI, and it accepts 1 parameter, which is
the site containing directory of movies having a familiar filename. Example is:

```
node scraper.js http://www.site.com/mymovies/
```

the output is a json file with a comprehensive information about the movie.

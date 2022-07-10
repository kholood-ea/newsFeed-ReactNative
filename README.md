# newsFeed-ReactNative

This is a news feed app made with react native and javascript, the app fetches news
from [Here](https://newsapi.org/v2/everything?q=apple&from=2022-07-05&to=2022-07-05&sortBy=popularity&apiKey=${YOUR_API_KEY})

and display a thumbnail and a heading.

Each news article component is pressible and will direct user to article details screen which displays all info
related to that article, user can also search certain article by title, news list is refreshed by scrolling list to top.

App has support for deep linking, localization, dark mode appearance.

Note:
linking to app can be tested using below command 

```npx uri-scheme open exp://ADDRESS:PORT/--/news --${OS}```

linking to specific article screen can be tested by:

```npx uri-scheme open exp://ADDRESS:PORT/--/news/{Title} --${OS}```

where ADDRESS is often 127.0.0.1 and PORT is often 19000 

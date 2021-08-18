
<br/>

<h1 align="center"><a href="https://jotdown.netlify.app" target="_blank"><img src="https://user-images.githubusercontent.com/43656115/76158436-92285b00-60ca-11ea-8b29-e064f9dcd900.png" alt="jotdown" width="300"></a></h1>

<br/>

Jot down is a bookmark and note web service📗 You can save your favorite websites or articles to Jot down. Also, you can write a note with your bookmarks.  
<br/>
Website: &nbsp; https://jotdown.netlify.app


[![home-jotdown](https://user-images.githubusercontent.com/43656115/76158377-2f36c400-60ca-11ea-99e8-909b6363e555.png)](https://jotdown.netlify.app)

<br/>

## Why I created this app
To manage a lot of bookmarks easily. I had been using Chrome bookmark manager but sometimes I couldn't find the bookmark that I was looking for. Also, I wanted to write a note with bookmarks to remember what the bookmarks are, but Chrome bookmark manager doesn't have that. To solve these problems, I made Jot down.

<br/>

## User Interface
![jotdown-ui](https://user-images.githubusercontent.com/43656115/76174246-64dbbb80-6163-11ea-9e46-ee29e85081a4.png)


<br/>

## Technology
- Front-end: React.js, Redux, React Router, styled-components, and Material-ui
- Backend: Django REST framework, and Python
- Infrastructure: Docker and Heroku
- Others: REST API, Axios, Gunicorn, and Netlify

<br/>


## Architecture
![architecture-jotdown](https://user-images.githubusercontent.com/43656115/76137120-0e00a580-5fee-11ea-8bce-cfff48684507.png)

<br/>

## Directory Structure

### React
```
src/
 index.tsx
 App.tsx
 
 actions/  -----Actions to call API and dipatch data to Redux 
   EACH-CATEGORY.ts/
 
 components/
   COMPONENT_NAME/
    |-- COMPONENT_NAME.tsx  -----components with styled-components
 
 reducers/  -----Get data from actions to send it to store 
   EACH-CATEGORY.ts/
 
 static/
  images/
 
 styles/
  |-- theme.tsx  -----Define global style, breakpoints, color variables  

 lib/  -----Sample bookmark data
```
<br/>

## Upcoming features
- Get bookmarks from browsers (Try to make chrome extension!)
- Sync bookmarks to a browser when a bookmark is edited
- Show skelton when bookmarks are loading (e.g. https://material-ui.com/components/skeleton/) 

<br/>

## Author
[eastend-street](https://github.com/eastend-street)

<br/>

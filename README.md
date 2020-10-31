
<br/>

<h1 align="center"><a href="https://jotdown.netlify.app" target="_blank"><img src="https://user-images.githubusercontent.com/43656115/76158436-92285b00-60ca-11ea-8b29-e064f9dcd900.png" alt="jotdown" width="300"></a></h1>

<br/>

Jot down is a bookmark and note web application 📗 You can save some your favorite website or article to Jot down. Also you can write a note with your bookmark.  
<br/>
Website: &nbsp; https://jotdown.netlify.app


[![home-jotdown](https://user-images.githubusercontent.com/43656115/76158377-2f36c400-60ca-11ea-99e8-909b6363e555.png)](https://jotdown.netlify.app)

<br/>

## Why I created this app
To manage a lot of bookmarks easily. I have been using chrome bookmark manager but sometimes I can't find the bookmark that I'm looking for. Then I often commented on bookmarks and saved them in Slack to remember what bookmark is, but it's difficult to find it again as well. Jotdown was born to solve these problems.

<br/>

## User Interface
![jotdown-ui](https://user-images.githubusercontent.com/43656115/76174246-64dbbb80-6163-11ea-9e46-ee29e85081a4.png)


<br/>

## Technology
- Front-end: React.js, Redux, React Router, styled-components, Material-ui
- Backend: Django REST framework, Python
- Infrastructure: Docker, Heroku
- Others: REST API, Axios, Gunicorn, Netlify

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
- Get bookmarks from browser (Try to make chrome extension!)
- Sync bookmarks to browser when bookmark is edited
- Show skelton when bookmark is loading (e.g. https://material-ui.com/components/skeleton/) 

<br/>

## Author
[eastend-street](https://github.com/eastend-street)

<br/>

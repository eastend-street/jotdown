<h1 align="center"><a href="https://jotdown.site" target="_blank"><img src="https://user-images.githubusercontent.com/43656115/74611765-e932a580-50b3-11ea-9563-214e959df574.png" alt="jotdown" width="300"></a></h1>

<br/>

📗 Bookmark and note web service 📗  
You can save some your favorite website or article to Jot down. Also you can write a note with your bookmark.  
<br/>
Website: &nbsp; https://jotdown.site


[![home-jotdown](https://user-images.githubusercontent.com/43656115/62005283-eeafaa80-b0e5-11e9-80c4-a79dd1c007d5.png)](https://jotdown.site)

<br/>

## Why I created this app
To manage a lot of bookmarks easily. I have been using chrome bookmark manager but sometimes I can't find the bookmark that I'm looking for. Then I often commented on bookmarks and saved them in slack to remember what bookmark is. But also difficult to find it again. Jotdown was born to solve these problems.

<br/>

## User Interface
Editing...

<br/>

## Technology
The front end made by React.js, back end made by Python. In front end, using Redux and styled-components, correct style application and state management are realized. In back end, using Django REST framework, Docker and Heroku. It established RESTful API communication.


- Front-end: React.js, Redux, React Router, styled-components, Material-ui
- Backend: Django REST framework, Python
- Infrastructure: Docker, Heroku
- Others: REST API, Axios, Gunicorn, Netlify

<br/>


## Architecture
![architecture-jotdown](https://user-images.githubusercontent.com/43656115/76137120-0e00a580-5fee-11ea-8bce-cfff48684507.png)

<br/>

### Front end directory Structure
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

## License
@eastend-street

<br/>

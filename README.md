# Shoppies - Fall 2021 Shopify Frontend Internship

![https://imgur.com/Kze86EY.png](https://imgur.com/C7stSNh.png)

# Project Overview 🎞️

This project is my submission for [Shopify's 2021 Frontend Development Internship](https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#heading=h.py0wnvufbhj3).

As someone who has mostly worked in backend development, I was at first considering applying for the backend internship but as a huge film buff (hahaha i said film instead of movies so you already know) I couldn't resist taking on the frontend challenge after reading the prompt. My experience in frontend is fairly limited outside of 1 or 2 small projects but I really enjoyed working on this challenge in React and it gave me an opportunity to learn something new which is always fun. 

In addition to learning a lot on the job during this challenge, all my work got wiped out around 4 am on Friday (2 days before submission) after I'd already spent close to a week on it so after a brief moment of considering not applying, I started from scratch again at 5 am Friday and armed with my one week of knowledge was able to get back up to speed by Saturday morning which I'm pretty proud of. This experience has really boosted my confidence in being able to learn quickly and I'm excited to continue learning and working in frontend dev after this.

## Project Website 🍿
https://shoppies-2021-fall.herokuapp.com/

## Demo 🎥

### Desktop View
https://user-images.githubusercontent.com/43353141/117557518-24aeec00-b039-11eb-856b-b113bb9cf6c2.mov



### Tablet/Mobile View
Horizontal scroll of nomination container

![iPad-view](https://user-images.githubusercontent.com/43353141/117564542-234de580-b072-11eb-8b41-f7192665ab3f.gif)



## Implemented Features 🎬
- Dynamic search 🔎
- Pagination for search results 📄
- Light mode and dark mode 🌞 🌒
- Nominations are persisted using local storage ✅
- Resizing on different screens and a horizontal scrollable container for nominated movies on small screens 📱
- On hover nomination and remove buttons which update and disable based off current nominations 🖱️
- Modal popups for more information on movies 🎬
  - Displays movie title, plot, genre, director(s), writer(s), imdb + rotten tomatoes ratings
- Animation on loading movie cards, search results, social share button hover, and completing 5 nominations ✨
- Pop up footer on completion of 5 nominations with confetti animation 🎉
- Social share buttons 🤝


## Future Improvements 💿
- Write API calls on server side
- Add other pages, such as an About page, to give further context to the project. Routing and Navbat has already been set up so it would be very easy to add this in the future.
- Add server side code for authentication to save nominations to an account
- Add localstorage to persist state on browser

# Assignment
We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:
- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

**Technical requirements**
1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx). ✅
2. Each search result should list at least its title, year of release and a button to nominate that film. ✅
3. Updates to the search terms should update the result list ✅
4. Movies in search results can be added and removed from the nomination list. ✅
5. If a search result has already been nominated, disable its nominate button. ✅
6. Display a banner when the user has 5 nominations. ✅


<img width="494" alt="Screen Shot 2021-05-09 at 2 08 15 AM" src="https://user-images.githubusercontent.com/43353141/117563434-72444c80-b06b-11eb-914a-3e83b7fc2a95.png">

**Extras**

There is a lot to be improved on here, you can polish the required features by crafting a nicer design, or improve the app by adding new features! Choose something that you feel best showcases your passion and skills.

If you need inspiration, here are examples of what you can work on. If you work on these ideas, we recommend choosing only one or two.

- Save nomination lists if the user leaves the page ✅
- Animations for loading, adding/deleting movies, notifications ✅
- Create shareable links ✅

# The Game of Tic Tac Toe 

A fun interactive single page application (SPA) that allows a user to sign up, sign in and play the game of Tic Tac Toe. This project was created during Project Week one of my Software Engineering Immersive Program at General Assembly.

## Programs & Languages Used

Javascript
HTML
SCSS
Bootstrap
jQuery
Ajax
Auth & Game Api

## Deployed Application:

https://stacycsolomon.github.io/Tic-Tac-Toe-Stacy-Solomon/

## Planning

My first step was to create a wireframe to outline how I want my game to be set up on the webpage. I then created the structure of my webpage using HTML and CSS languages and added forms to store user information to the serve. Authentication Tokens are assigned for each user using POST & DELETE API calls. A new game was then created using a POST games API call, and response stored to the API. The game board was created using HTML and CSS, and event handlers were added to each box within the board using JQuery. I then wrote the game logic using Javascript, updated the game with each move using PATCH API calls. Once a player wins or loses, a display message is read, and they have the option to play again or end the game.

## User Stories

* As a user, I want to be able to sign up for the game by entering my email and password.
* As a user, I want to be able to sign in and sign out as needed.
* As a user, I want to be able to start the game and restart a new game.
* As a user, I want to be able to see whether the game has been won or there is draw.
  
## Wireframes

![Desktop Wireframe](https://imgur.com/a/cMvEtId)
![Mobile Version](https://imgur.com/a/DxYReJz)

## Unsolved Issues

* There is no display message for a draw/tie.

## Improvements

* Use DRY code to make my code easier to read and less repetitive
* Figure out the logic for tied games/draws
* Add additional styling for user-engagement and responsiveness
* Keep a running score of the game
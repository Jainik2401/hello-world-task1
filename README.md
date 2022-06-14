Login page path :- http://localhost:3000/login

Jokes page path :- http://localhost:3000/jokes

Dashboard page path :- http://localhost:3000/dashboard


JavaScript version :- ES6 Version
functional components :- react hooks
UI frameworks :- material UI


[ROUTE NAME -/login]
[ROUTE NAME -/jokes]
[ROUTE NAME -/dashboard]


login page

a. Username - To accept only alphabets and no special char, symbol,
and space
b. Password - limit - 8 char only and to be alphanumeric and no space
c. Show error messages accordingly
d. login page is our defualt routes


dashboard page 

After successful login redirect to /dashboard that has welcome message.
In this page show navbar menu for jokes and logout.


jokes page 

a. Jokes Spot (card UI in some comic style fonts) -
b. [ROUTE NAME -/jokes]
c. use of axios to fetch this API and display the response on jokes page
d. loader integrated while the response is being fetched


code file
route's file :- hello-world-task/src/App.js  or  App.css 
login page :- hello-world-task/src/coponents/login/index.js  or login.css
dashboard page :- hello-world-task/src/coponents/dashboard/index.js  or dashboard.css
jokes page :- hello-world-task/src/coponents/jokes/index.js  or jokes.css
dashboard page :- hello-world-task/src/coponents/navbar/index.js  or navbar.css
  
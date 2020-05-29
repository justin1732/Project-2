# Project-2 Code Chow
## Concept:
This app was created by Group Forager as our second big project for the University of Denver Coding Bootcamp. With pandemic murmurings on the rise, we wanted to create an app that could allow users to see the nutritional value of food in their pantries as well as come up with and be able to use recipes based on those ingredients. This Node JS and Heroku-deployed app is the result of that.

## How to use in Heroku:
Deployed at https://project2player2pt2.herokuapp.com/

1.  You will initially land on the login/create account page.  If you don't have an account, you'll need to create one.

2.  Upon logging in you'll be taken to your user's homepage, where all your favorite ingredients and recipes will eventually be stored.

3. To search ingredients, simply enter the name of an ingredient in the field and click the "Ingredient" button.

4. To search recipes, simply enter the name of an ingredient in the field and click the "Recipes" button.

5. To save any of either ingredients or recipes, simply click the "Add to Favorites" button.

6. View you favorites by clicking the home button.
 
 How to use locally:
 For a local version, I recommend using Visual Studio Code. Navigate over to my GitHub repo, click clone, and be sure to type in the following below:
git clone

Then type:

npm install

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
node server.js
```

Your app should now be running on <http://localhost:3000>.

My repo can be found at:
https://github.com/justin1732/Project-2


## Technologies Used

This application follows most MERN deployment principles with MVP file and folder structuring. This application relies upon Node JS connected through Heroku and uses MySQL to communicate with the JAWS DB for database use in production with Express for the engine. It also uses Express-Handlebars to render the web pages and user choices. It uses Passport JS for user authentication with the assistance of Express Session. Other dependencies  include some JQuery, a lot of Axios, and some Canvas for rendering, and Bootstrap and Canvas for assistance in rendering and other elements.

## Contact Information
I am available to be found at justteach17@gmail.com and my website is justin1732.github.io 

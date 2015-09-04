# node_API
Node API using Express framework and Backbone.js to render the front end. <br>

## Technologies used
* Node.js
* Express.js
* Backbone.js
* Handlebars
* Mongo.db

## Steps

### Initial Setup
1.) Create the project > npm express starwarsapi --css less --hbs <br>
2.) Create the ORM > npm install mongoose --save-dev <br>
3.) > npm install
4.) In another terminal tab, launch the db > sudo mongod

### Create Database Connection
1.) Build Mongoose ORM connection > mkdir models > touch db.js and build connection <br>
2.) Build model schema > /models touch Character.js and export the module when done <br>
3.) Update the the app.js and require the database BEFORE the routes load <br>


### Create the routes/controllers
1.) Create a new file under the routes folder > characters.js <br>
2.) Require the necessary modules and create the routes for the RESTful API <br>
3.) Test out the API by using Postman to add new records to the database

### Presentation Layer
1.) Add the Backbone scripts to the layout.hbs <br>
2.) Create the underscore template and add the location to plant the rendered data <br>
3.) Add an app.js file to the /public/javascripts folder
4.) Create the Backbone collection and templates in the app.js file

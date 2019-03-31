# Burgers

Burgers is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, this app displays the burger on the "Here's Your Burger" log waiting to be devoured.

Each burger in the log also has a Yum button. When the user clicks it, the burger disappears from of the page because it has been eaten.

This app stores every burger in a database, whether devoured or not. The burger logger is created with MySQL, Node, Express, Handlebars and a uniquely-created ORM.   Node and MySQL query and route data in this app, and Handlebars  generates the HTML.

## Application Basics

1. Created a GitHub Burgers repo and cloned it to my computer.

2. Made a package.json file by running npm init from the command line.

3. Install the Express npm package: npm install express.

4. Created a server.js file.

5. Installed the Handlebars npm package: npm install express-handlebars.

6. Installed MySQL npm package: npm install mysql.

## Requirements
The following npm packages are required inside of the server.js file:
*express
*DB Setup

## Setup Sql
Inside the burgers directory, I created a folder named db and created SQL queries (schema.sql) that do the following:

*Create the burgers_db.
*Switch to or use the burgers_db.
*Create a burgers table with these fields:
    *id: an auto incrementing int that serves as the primary key.
    *burger_name: a string.
    *devoured: a boolean.

Also included is a seeds.sql file to insert queries to populate the burgers table with   three entries.

I pasted the schema.sql and seeds.sql files into the mysql server from the command line and ran the SQL files.


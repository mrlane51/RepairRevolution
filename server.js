// connect modules to seperate files
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Import subclass of model dev to sync with database
// const Dev = require('../../models/dev');

// creates an application from the node module
const app = express();
const PORT = process.env.PORT || 3001;

// middleware for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes middleware
app.use(routes);

// Connect to the database before starting the Express.js server
// Force true to drop/recreate table(s) on every sync/ server start
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Now listening'));
});

// change main back to index.js in pacakage.json later
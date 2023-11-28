// Requirements
const path = require('path');
const express = require('express');
const session = require('express-session');
const expbhs = require('express-handlebars');

// Starting express.js and defining PORT and handlebars
const app = express();
const PORT = process.env.PORT || 3001;

// Creates a const for a session
const sess = {
    secret: "Secret message for food review app",
    resave: false,
    saveUninitialized: true
};

// Having express use sessions, handlebars, and routes
app.use(session(sess));

app.use(express.json());

// App starts to listen on the given PORT
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));



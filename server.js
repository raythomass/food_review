// Requirements
const sequelize = require('./config/connection');
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const { helpers } = require('./utils/helper');
const routes = require('./controllers')
const sequelize = require('./config/connection');
//const sequalizeStore = require('connect-session-sequalize')(session.Store);

// Starting express.js and defining PORT and handlebars
const app = express();
const PORT = process.env.PORT || 3002;

// Creates a const for a session
const sess = {
    secret: "Secret message for food review app",
    resave: false,
    saveUninitialized: true,
};

// handlebars can use the helper file from utils
const hbs = exphbs.create({ helpers });

// app is using handlebars as the engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app is using session
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// App starts to listen on the given PORT
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });

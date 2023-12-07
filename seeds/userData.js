const sequelize = require('../config/connection')
const { User } = require('../models');

const userData = [
    {
        username: 'raymond1',
        password: 'raypassword1',
    },
    {
        username: 'edwin2',
        password: 'edwinpass', 
    },
    {
        username: 'dib3',
        password: 'dibpass',
    },
    {
        username: 'ray5',
        password: 'rayspass5',
    },
    {
        username: 'dibuser6',
        password: 'dibpassword6',
    },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
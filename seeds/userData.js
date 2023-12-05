const sequelize = require('../config/connection')
const { User } = require('../models');

const userData = [
    {
        username: 'raymond1',
        password: 'raypassword1',
    },
    {
        username: 'raymond2',
        password: 'raypassword2', 
    },
    {
        username: 'raymond3',
        password: 'raypassword3',
    },
    {
        username: 'raymond4',
        password: 'raypassword4',
    },
    {
        username: 'raymond5',
        password: 'raypassword5',
    },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
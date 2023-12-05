const sequelize = require('../config/connection');

const seedUser = require('./userData')
const seedReview = require('./reviewData');

const seedDatabase = async() => {
    await sequelize.sync({ force:true })

    await seedUser();
    await seedReview();
};

seedDatabase();
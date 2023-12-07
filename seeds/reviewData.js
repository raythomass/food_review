const sequelize = require('../config/connection')
const { Review } = require('../models');

const reviewData = [
    {
        title: 'Chicken Parmesan',
        content: 'This is the best chicken parmesan I have ever eaten.',
        user_id: 1,
    },
    {
        title: 'Beef Ramen',
        content: 'The ramen was pretty good however the broth did not have much taste.',
        user_id: 2,
    },
    {
        title: 'California Rolls',
        content: 'One of the best rolls I have ever had.',
        user_id: 3,
    },
    {
        title: 'Barbeque Bacon Cheeseburger',
        content: 'This burger was terrible!',
        user_id: 4,
    },
    {
        title: 'Pepperoni Pizaa',
        content: 'How could you mess up pizza? Obviously the best food ever!',
        user_id: 5,
    },
];

const seedReviewData = () => Review.bulkCreate(reviewData);

module.exports = seedReviewData;
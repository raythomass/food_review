const sequelize = require('../config/connection')
const { Review } = require('../models');

const reviewData = [
    {
        title: 'First Review',
        content: 'This is my first food review',
        user_id: 1,
    },
    {
        title: 'Second Review',
        content: 'This is my second food review',
        user_id: 2,
    },
    {
        title: 'Third Review',
        content: 'This is my third food review',
        user_id: 3,
    },
];

const seedReviewData = () => Review.bulkCreate(reviewData);

module.exports = seedReviewData;
const User = require('./User');
const Review = require('./Review');
const Comment = require('./Comment');

Review.hasMany(Comment, {
    foreignKey: 'review_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Review, {
    foreignKey: 'review_id'
});

module.exports = { User, Review, Comment };
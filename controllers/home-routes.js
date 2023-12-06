const router = require('express').Router();
const { User, Review, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({})
        const reviewData = await Review.findAll({})
        const users = userData.map((user) => user.get({ plain: true }));
        const reviews = reviewData.map((review) => review.get({ plain: true }));
        res.render('homepage', {users, reviews})
    }
    catch(err) {
        res.status(500).json(err)
    }
});

router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/signup', (req,res) => {
    res.render('signup');
})

module.exports = router;
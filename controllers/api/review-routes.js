const { User, Review, Comment } = require('../../models');
const router = require('express').Router();

// GET all reviews
router.get('/', async (req,res) => {
    try {
        const allReviews = await Review.findAll({})
        res.status(200).json(allReviews)
    }
    catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// GET a single review
router.get('/id', async (req,res) => {
    try {
        const oneReview = await Review.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(oneReview)
    }
    catch(err) {
        console.log(err)
        res.status(200).json(err)
    }
});

// CREATE a new review
router.post('/', async (req,res) => {
    try {
        const newReview = await Review.create({
            title: req.body.title,
            content: req.body.content,
        });
        res.status(200).json(newReview)
    }
    catch(err) {
        console.log(err)
        res.status(200).json(err)
    }
});

module.exports = router;
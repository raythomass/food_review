const { User, Review, Comment } = require('../../models');
const router = require('express').Router();

// GET all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll({})
        res.status(200).json(allUsers)
    }
    catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// GET a single user from a username
router.get('/:username', async (req, res) => {
    try {
        const oneUser = await User.findOne({
            where: {
                username: req.params.username
            }
        });
        res.status(200).json(oneUser)
    }
    catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// Create a new user
router.post('/', async (req,res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        res.status(200).json(newUser)
    }
    catch(err) {
        console.log(err)
        res.status(200).json(err)
    }
});

module.exports = router;
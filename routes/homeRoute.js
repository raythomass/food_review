//imports 
//Note: need change the model comment to recommend, than add the code from comment.js to review.js
const router = require('express').Router();
const {User,Food,Review, Recommend} = require('../models');
const withAuth = require('../utils/auth');

//get all te food from the database
router.get('/', withAuth, async(req, res) => {
    try {
        const foodData = await Food.findAll({
            where:{
                userId: req.session.userId,

            },
            attributes: ['id', 'title','filename','ingredients'],
            include: [{
                model: 'review'},

                {attributes: ['id', 'comment', 'user_id', 'review_id','date_created']},
                {include: {
                    model: User,
                    attributes: ['username'],
                    }
                },
            ],
        });

        const foods = foodData.map((food) => food.get({plain: true}));
        res.render('homepage', {
            foods,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//gets the ,clicked on, food to recommend other ingredient to add
router.get('/recommendation/:id', withAuth, async(req,res) => {
    try{
        const recommenddb =  await Food.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'title', 'filename', 'ingredients'],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Recommend,
                    attributes: ['id','ingredient'],
                }
            
            ]
        });
        const recommends = recommenddb.get({plain:true});
        res.render('edit-recommend', {recommends, loggedIn: true, username: req.session.username});
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };

});


module.exports = router;
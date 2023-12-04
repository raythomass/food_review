const router = require('express').Router();
const {User} = require('../../models');
const withAuth = require('../../utils/auth');

//sign up the user
router.post('/', async (req, res) => {
    try{
        const dbUserData = await User.create(req.body);
        req.session.save(() => {
            req.session.userId = dbUserData.userId;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        });
    } catch {
        res.status(400).json(err);
    }
});

//login in the user if they have an acount
router.post('/login', async(req,res) => {
    try{
        const dbUserData = await User.findOne({
            where: {username: req.body.username}
        });
        if(!dbUserData){
            res.status(400).json({message: `User id ${req.params.id} is not valid.`});
            return;
        }
        const pwValidated = await dbUserData.checkPassword(req.body.password);
        if(!pwValidated){
            res.status(400).json({message: "Incorrect password!"});
            return;
        }

        req.session.save(() =>{
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        res.status(200).json({message: "You are logged in!"});
        });
    }catch (err){
        res.status(400).json(err);
    }
});

//logs out the user
router.post('/logout', withAuth, async(req,res) => {
    try{
        if(req.session.loggedIn){
            const dbUserData = await req.session.destroy(() => {
                res.status(204).end();
            });
        }else{
            res.status(404).end();
        }
    }catch{
        res.status(400).end();
    }
});

module.exports = router;
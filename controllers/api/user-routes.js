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

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
      console.log('a')
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
      console.log('b')
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      console.log('c')

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
        console.log('Logged In')
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

// // Create a new user
// router.post('/', async (req,res) => {
//     try {
//         const newUser = await User.create({
//             username: req.body.username,
//             password: req.body.password
//         });
//         res.status(200).json(newUser)
//     }
//     catch(err) {
//         console.log(err)
//         res.status(200).json(err)
//     }
// });

module.exports = router;
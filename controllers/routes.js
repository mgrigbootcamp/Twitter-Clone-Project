const router = require('express').Router();
const { User, Squawk } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage', {

    });
})

router.get ('/newsfeed', async (req, res)=>{
    try {
        // Get all projects and JOIN with user data
        const squawksData = await Squawk.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
          order: [[ 'posted_at', 'DESC' ]],
        });
    
        // Serialize data so the template can read it
        const squawks = squawksData.map((squawk) => squawk.get({ plain: true }));
        
        res.render('newsfeed',{
            squawks        
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;
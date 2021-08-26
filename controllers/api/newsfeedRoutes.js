const router = require('express').Router();
const { User, Squawk } = require('../../models');

router.get ('/', async (req, res)=>{
    try {
        // Get all projects and JOIN with user data
        const squawksData = await Squawk.findAll({
            order: [[ 'user_id', 'DESC' ]]
        });
    
        // Serialize data so the template can read it
        const squawks = squawksData.map((squawk) => squawk.get({ plain: true }));
        
        res.render('newsfeed',{
            squawks        
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
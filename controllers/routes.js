const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage', {

    });
})
router.get ('/newsfeed', async (req, res)=>{
    res.render('newsfeed',{
        
    })
})

module.exports = router;
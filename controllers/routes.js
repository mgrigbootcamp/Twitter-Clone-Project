const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage', {

    });
})
router.get('/newsfeed', async (req, res) => {
    res.render('newsfeed', {

    })
})

router.get('/sqwuak', async (req, res) => {
    res.render('Sqwuak!', {

    })
})

router.delete('/deletesqwuak', async (req, res) => {
    res.render('Post Deleted', {

    });

})
module.exports = router;
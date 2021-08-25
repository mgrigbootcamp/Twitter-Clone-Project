const router = require('express').Router();

router.delete('/', async (req, res) =>{
    res.render('Post Deleted', {

    });

})

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api');
const feedRoutes = require('./routes');

router.use('/api', apiRoutes);
router.use('/', feedRoutes)

module.exports = router;
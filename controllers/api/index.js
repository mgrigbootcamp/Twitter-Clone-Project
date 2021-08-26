const router = require('express').Router();
const userRoutes = require('./userRoutes');
const squawkRoutes = require('./squawkRoutes');

router.use('/users', userRoutes);
router.use('/squawks', squawkRoutes);

module.exports = router;
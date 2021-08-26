const router = require('express').Router();
const { DATE } = require('sequelize/types');
const { Squawk } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newSquawk = await Squawk.create({
            ...req.body,
            posted_at: new Date()
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.delete('/:id', async(req, res) => {
//     try {
//         const squawkData = await Squawk.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

//         if (!user_id) {
//             res.send('<script> alert('\You can only delete your own squawks!') </script>');
//         }
//     }
// })

module.exports = router;
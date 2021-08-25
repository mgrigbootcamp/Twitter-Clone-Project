const sequelize = require('../config/connection');
const seedSquawks = require('./squawksData');
const Squawk = require('../models/Squawk');
const User = require('../models/User');
const userData = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    // console.log(userData);
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    await Squawk.bulkCreate(seedSquawks, {
        individualHooks: true,
        returning: true
    });

    process.exit(0);
};

seedAll();
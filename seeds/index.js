const sequelize = require('../config/connection');
const User = require('../models/User');
const Squawk = require('../models/Squawk');
const squawksData = require('./squawksData.js');
const userData = require('./userData.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log(userData);
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    await Squawk.bulkCreate(squawksData, {
        individualHooks: true,
        returning: true
    });

    process.exit(0);
};

seedAll();
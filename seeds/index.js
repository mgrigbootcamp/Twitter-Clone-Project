const sequelize = require('..config/connection');
const seedSquawks = require('./squawksData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedSquawks();
    process.exit(0);
};

seedAll();
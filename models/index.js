const User = require('./User');
const Squawk = require('./Squawk');

Squawk.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Squawk, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Squawk };
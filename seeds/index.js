const sequelize = require('../config/connection');
const userData = require('./usersData');
const postData = require('./postData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await userData();
    console.log('\n----- USERS SEEDED -----\n');

    await postData();
    console.log('\n----- BLOG POSTS SEEDED -----\n');

    process.exit(0);
};

seedAll();
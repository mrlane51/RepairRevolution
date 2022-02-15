const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
    //does this need to be false to not overwrite data that is added later?
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blogPost of blogData) {
        await BlogPost.create({
            ...blogPost,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        })
    }

    process.exit(0);
};

seedDatabase();
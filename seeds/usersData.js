const { User } = require('../models');

const userData = [
    {
        "name": "byrd",
        "email": "byrd@gmail.com",
        "password": "password1234"
    },
    {
        "name": "user52",
        "email": "jdoe@gmail.com",
        "password": "coolPw2020"
    },
    {
        "name": "sakura",
        "email": "cherry@aol.com",
        "password": "pass123!"
    }
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData
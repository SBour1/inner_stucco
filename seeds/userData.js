const { User } = require('../models');

const userData = [
    {
    "username": "Steve",
    "email": "bourpower@gmail.com",
    "password": "password"
    
    },
    {
    "username": "Titus",
    "email": "titus@gmail.com",
    "password": "password"

    },
    {
    "username": "Radhika",
    "email": "radhika@gmail.com",
    "password": "password"

    }
]

const seedUser= () => User.bulkCreate(userData);

module.exports = seedUser;

const { BlogPost } = require('../models');

const postData = [
    {
        "topic": "how do i take the screen off iphone 3GS",
        "comment": "i dropped my phone and i want to replace it. PLZ help!",
        
    },
    {
        "topic": "Bill for Right to Repair in the US, Eu Next??",
        "comment": "After seeing US lawmakers introduced the bill, will other countries follow suit? ",
        
    },
    {
        "topic": "Apple introducing self-repair? thoughts?",
        "comment": "Apple recently introuced self repair that will allow customers to attempt to service their iphones and soon Mac support will be coming. But its still very limited. What are your thoughts about it",
        
    }
];

const seedPostData = () => BlogPost.bulkCreate(postData);

module.exports = seedPostData;
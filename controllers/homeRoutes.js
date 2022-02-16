const router = require('express').Router();
const { BlogPost, User } = require('../models');
//const withAuth - require('../utils/auth');

router.get('/', async (req, res) =>{
    try {
        const blogData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });
        //serializing the data
        const blogPosts = blogData.map((blogPost) => blogPost.get({ plain: true }));

        res.render('homepage', {
            blogPosts,
            //should we have the user logged in here?
            //logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog_post/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                model: User,
                attributes: ['name']
                },
            ],
        });
    const blogPost = blogData.get({ plain:true });

    res.render('blog_post', {
        blogPost,
        
        //logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try { 
      const blogData = await BlogPost.create({
      topic: req.body.topic,
    //   possible addition: 
    //   title: req.body.title,
      comment: req.body.comment,
    });
    res.status(200).json(blogData)
  } catch (err) {
    res.status(400).json(err);
  }
  });
  

//DO WE ADD A USER PROFILE PAGE ROUTE HERE?

router.get('/login')

module.exports = router;
const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json({message: "successfully created new blog post", newBlogPost});
    } catch (err) {
        res.status(400).json({ message: "error posting new blog post", err})
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                //user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: "there is no blog post associated with this id"});
            return;
        }

        res.status(200).json({message: "successfully deleted blog post", blogData})
    } catch (err) {
        res.status(500).json({message: "error deleting this blog post", err})
    }
})

module.exports = router;
